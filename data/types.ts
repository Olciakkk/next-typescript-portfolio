export type Skill = {
  name: string
  description: string
  additional?: string[]
}

export type SkillTree = Record<string, Skill[]>
export type SkillsSimple = {
  imgSrc: string
  subheadline: string
  bodyText: string
}[]

export type Translations = Record<
  string,
  {
    label: string
    title: string
  }
>

export type AboutPage = {
  shortIntro: {
    headline: string
    text: (string | JSX.Element)[]
  }
  detailedIntro: {
    headline: string
    text: (string | JSX.Element)[]
  }[]
}
