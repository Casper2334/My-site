import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enchanting Feline Companions: The Grace and Independence of Cats',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Cats attract with their grace and independence. They are able to create a special bond with their owners and inspire a sense of comfort and tranquility.
      </>
    ),
  },
  {
    title: 'Feline Friends: The Warmth and Joy of Cat Companionship',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cats are great companions that provide warmth and joy to their owners, and their independence and sensitivity make them excellent pets for many people.
      </>
    ),
  },
  {
    title: 'Exploring the Quirks: The Unique Personalities of Cats',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Cats have a unique personality and distinct behavioral traits, making each one unique and fun to observe and interact with.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
