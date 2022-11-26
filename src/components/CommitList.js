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
            repo: "Git-Commits"
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
    <div >
        <h3>Commit List <button onClick={getData}>Refresh</button></h3>
        {data.length ? data.map(({commit, sha}) => {
            return <div key={sha} className="card">
                <h4><b>{commit.message}</b></h4> 
                <div>
                    <span>{commit.author.date}</span> by <span title={commit.author.email}>{commit.author.name}</span>
                </div>
            </div>
        })  : <div></div>}
    </div>
  )
}

export default CommitList