import React, { useEffect, useState } from 'react'
import { Octokit } from "octokit";

function CommitList({token}) {
    const octokit = new Octokit({ 
        auth: "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",
      });

    const [data, setData] = useState([])
    
    const getData = async () => {
        // const octokit = new Octokit({ 
        //     auth: token,
        //   });
        const resp = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: "abhiprksh",
            repo: "News-Articles"
        });
        if(resp.status === 200)
            setData(resp.data)
        console.log({resp})
    }

    useEffect(()=>{
        // if(token)
            getData()
    },[token])

    console.log(token)
    console.log({data})

  return (
    <div>
        <h3>Commit List</h3>
        {data.map(({commit}) => {
            <div>
                <div>{commit.message}</div>
                <div>
                    <span>{commit.author.date}</span> by <span title={commit.author.email}>{commit.author.name}</span>
                </div>
            </div>
        })}
    </div>
  )
}

export default CommitList