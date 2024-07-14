
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

import AvatarImage from '../../public/assets/blog/authors/fachri.jpeg';
import { Container } from '../components/Container';
import { ExternalLink } from '../components/ExternalLink';
import { PageTitle } from '../components/PageTitle';
import { Section } from '../components/Section';
import { SocialLink } from '../components/SocialLink';
import {
  AboutExtended,
  SocialMedia,
} from '../data/lifeApi';

const seoTitle = `About`;
const seoDescription = `A few words about me.`;

export default function AboutMe() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={AvatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <PageTitle>Hi, I&apos;m Fachri Fajar.</PageTitle>
            <div className="mt-6 text-base">{AboutExtended}</div>
            <div className="mt-6 flex gap-6">
              {SocialMedia.map((socialProfile) => (
                <SocialLink
                  key={socialProfile.name}
                  aria-label={`Follow on ${socialProfile.name}`}
                  href={socialProfile.link}
                  icon={socialProfile.icon}
                  target="_blank"
                />
              ))}

            </div>

            <Section>
              <Section.Title as="h2">Work</Section.Title>
              <Section.Content>
                I&apos;m a software developer with over 2 years of experience. I started as a QA Analyst, then transitioned to Software Developer and now I&apos;m mostly focused on
                developing great user experiences using Javascript / Typescript.
                <br />
                {/* professional project */}
                <br />I created applications from scratch for company project
                world like{' '}
                <ExternalLink href={'https://www.sid.ethos.co.id/'}>SID</ExternalLink>
                {/* side project */}
                . I also developed a side project using
                React.js/Typescript for{' '}
                <ExternalLink href={'https://www.link-hub-v1.vercel.app'}>LinkHub</ExternalLink>. If you&apos;d like to work with me, you can{' '}
                <ExternalLink href="mailto:fachri.fajar@gmail.com">email me.</ExternalLink>
              </Section.Content>
            </Section>
          </div>
        </div>
      </Container>
    </>
  );
}
