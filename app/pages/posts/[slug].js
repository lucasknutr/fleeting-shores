// * JUST FOLLOWING SOME SIMPLE RULES TO DEAL WITH .MDX FILES

import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

// * Getting static paths to present each blog post, next-mdx-remote make it quite an easy job to do that

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map(file => {
        return {
            params:{
                slug:file.replace(".mdx", "")
            }
        }
    });
    return {
        paths,
        fallback:false
    }

    //
}

export async function getStaticProps({params:{slug}}){
    const fileData = fs.readFileSync(path.join("posts",slug+'.mdx'),'utf-8'); // get the file data
    const {data,content} = matter(fileData); // extract the front matter and the content
    const mdxSource = await serialize(content); // serialize the content
    return { // export the data
        props: {
            frontMatter:data,
            slug,
            mdxSource
        }
    }
}

export default function Post(props) {
    return (
        <div>
            {
                props.frontMatter && props.mdxSource && (
                    <div>
                        
                            <title>{props.frontMatter.title}</title>
                        
                    <h1>{props.frontMatter.title}</h1>
                    
                    </div>
                )
            }
        </div>
    )
    }