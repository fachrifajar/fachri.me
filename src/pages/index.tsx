import { compareDesc } from 'date-fns';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { SocialLink } from '../components/SocialLink';
import { About, Name, SocialMedia } from '../data/lifeApi';

const seoTitle = 'Fachri Fajar';
const seoDescription =
  'A passionate software engineer with an eye for details based in Wrocław, Poland.';

// type Props = {
//   latestNotes: Note[];
// };

export default function Home({ latestNotes }: Props) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <PageTitle>{Name}</PageTitle>
          <p className="mt-6 max-w-2xl text-base text-balance">{About}</p>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

// const NEWEST_POSTS_TO_DISPLAY = 5;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const latestNotes = await notesApi.getNotes('desc', NEWEST_POSTS_TO_DISPLAY);

//   return {
//     props: { latestNotes },
//     revalidate: 10,
//   };
// };
