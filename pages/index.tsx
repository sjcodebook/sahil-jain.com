import { Suspense } from 'react';
import fs from 'fs';
import path from 'path';

import Container from '../components/Container';
import {
  Hero,
  FeaturedBlogs,
  WorkExperience,
  FeaturedCollections,
  FeaturedProjects
} from '../components/Home';

export default function Home({ collections = [] }) {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <Hero />
          <FeaturedBlogs />
          <WorkExperience classes="mt-16" />
          <FeaturedCollections classes="mt-16" collections={collections} />
          <FeaturedProjects classes="mt-16" />
        </div>
      </Container>
    </Suspense>
  );
}

export async function getServerSideProps() {
  const collections = [];
  fs.readdirSync(path.resolve('./public/static/images/all-posts/')).forEach(
    (file) => {
      collections.push(file);
    }
  );
  return {
    props: {
      collections
    }
  };
}
