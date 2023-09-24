import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));
  return (
   
  )
}
