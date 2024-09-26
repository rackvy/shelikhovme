import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Scroller, Tag, SmartImage } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, newsletter, person, routes } from '@/app/resources'
import { Mailchimp } from '@/app/components';
import { Posts } from '@/app/blog/components/Posts';

import styles from '@/app/home.module.scss';

export function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home() {
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
				
					<Flex
						direction="column"
						fillWidth maxWidth="s" gap="m">
						<RevealFx translateY="4">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								Разрабатываю на <span className={styles.colorIndigo}>node.js</span>, <span className={styles.colorIndigo}>php</span>, <span className={styles.colorIndigo}>react.js</span>, <span className={styles.colorIndigo}>1C-Битрикс</span> уже более 14 лет
							</Heading>
						</RevealFx>
						<RevealFx translateY="8" delay={0.2}>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-l">
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4}>
							<Button
								data-border="rounded"
								href="/about"
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"/>
										)}
										Обо мне
								</Flex>
							</Button>
						</RevealFx>
					</Flex>

			</Flex>
			<Scroller direction="row">
				<Flex
					maxWidth={500}
					maxHeight={250}
					fillWidth
					direction="row"
					gap="40"
				>
					{home.partners.map((partner, index) => (
						<SmartImage
							src={partner.src}
							alt={partner.alt}
							aspectRatio="16/9"
							radius="full"
							objectFit="contain"
							className={styles.partnerItem}
						/>
					))}
				</Flex>
				</Scroller>
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1,1]}/>
			</RevealFx>
			{routes['/blog'] && (
				<Flex fillWidth paddingX="20">
					<Posts range={[1,2]} columns="2"/>
				</Flex>
			)}
			<Projects range={[2]}/>
			{ newsletter.display &&
				<Mailchimp/>
			}
		</Flex>
	);
}
