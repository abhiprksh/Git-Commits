import React, { useEffect, useState } from 'react'
import { Octokit } from "octokit";

function CommitList({token}) {

    const [data, setData] = useState([])
    
    const getData = async () => {
        const octokit = new Octokit({ 
            auth: token,
          });
        const resp = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: "abhiprksh",
            repo: "News-Articles"
        });
        if(resp.status === 200)
            setData(resp.data)
        else
            setData([])
        console.log({resp})
    }

    useEffect(()=>{
        if(token)
            getData()
    },[token])

  return (
    <div>
        <h3>Commit List</h3>
        {data.length ? data.map(({commit, sha}) => {
            return <div key={sha}>
                <div>{commit.message}</div>
                <div>
                    <span>{commit.author.date}</span> by <span title={commit.author.email}>{commit.author.name}</span>
                </div>
            </div>
        })  : <div></div>}
    </div>
  )
}

export default CommitList