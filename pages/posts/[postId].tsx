import * as React from 'react';
import { useRouter } from 'next/router';

export interface PostDetailPageProps {
}

export default function PostDetailPage (props: PostDetailPageProps) {
  const router = useRouter()

  return (
    <div>
      <h1>post detail page</h1>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
}
