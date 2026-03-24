import { useState, useRef, useEffect, type ReactElement, type SVGProps } from 'react';
import { Header, type HeaderNavItem } from '../../layout/Header';
import FadeInOnScroll from '../../common/FadeInOnScroll';
import CountUp from '../../common/CountUp';
import AnimatedImageMarquee, { type MarqueeRow } from '../../common/AnimatedImageMarquee';
import SectionHeading from '../../common/SectionHeading';
import Footer from '../../layout/Footer/Footer';
import ServicesDescriptionCard from '../../sections/Services/components/ServicesDescriptionCard';
import GlobalLocationsSections from '../../sections/Global-Locations/GlobalLocationsSections';

const DotNetLogo = (): ReactElement => (
  <svg viewBox="0 0 256 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
    <rect width="256" height="96" rx="12" fill="#512BD4" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="44" fill="white">
      .NET
    </text>
  </svg>
);

const AzureLogo = (): ReactElement => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
    <path d="M10 80 L40 20 L70 80 Z" fill="#0078D4" />
    <path d="M40 20 L70 80 L90 60 L60 20 Z" fill="#00A4EF" opacity="0.9" />
  </svg>
);

const AngularLogo = (): ReactElement => (
  <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-full w-full">
    <path d="M125 12 L236 66 L205 208 L125 238 L45 208 L14 66 Z" fill="#DD0031" />
    <path d="M80 170 L100 80 L125 102 L150 80 L170 170" stroke="#ffffff" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M110 140 L140 140" stroke="#ffffff" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type ApproachStep = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  expandedImageSrc: string;
  expandedImageAlt: string;
  number: string;
  title: string;
  description: string;
  expandedTitle: string;
  expandedDescription: string;
};

type ExpertiseCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  technologies: Array<{
    alt: string;
    src: string;
    bgClassName: string;
  }>;
};

const headerNavItems: HeaderNavItem[] = [
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
  { id: 'locations', label: 'Locations', href: '/#locations' },
  { id: 'about', label: 'About Us', href: '/about-us' },
];

const approachSteps: ApproachStep[] = [
  {
    id: 'ideate',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDhEoQKiAv9T7RQtB_CMPRMwyt30sOWt1zyKooCMnywgh6oOSOGgKoOxVwk-zbGU5eU8hXjiLXIqcXzfAtoWFp-KYscmvwb59etBzByo5y-xnFC3SRS_yiRNGLL17eEaB2jztkYpBQXm0_xLno1xfb32eFXAdoGBMS2VwRLKj0zb0PJ34SKv0fNStfC_oMmgdfw12jRR5Ov29-i5wlJbszTkS9tD0K0oOwNTaCBlR-iy50eQKBIGYvrNjv-VDEzCoHBVP_-S2V_jpPE',
    imageAlt: 'Abstract black and white architectural detail of high-contrast skyscraper glass and steel',
    expandedImageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAon45KFe9Y69TGNanuDSQIwKXtRluiEX-7wYwmwqDCjg7zk72E3xmwMIVKNjFGWN_QGbm4wV1ehX4NBdDKfuzGDMvQl6RXAYmgidc0icZR1fDJJuCBbddAhNlmpa4eeHy4f0iAN8flXuoIn-sVb4M0rDjj7bRzt0dBPH5Y7lsrVnH7L5KBxs8oOWxGu4FkJxImCFET0mtuDPVuWahhTEUmjBfs2LvV5zQ31GmW1NIl-nR2sX_k1bGcnjae4v0eqIymc99xPlJcv4MS',
    expandedImageAlt: 'Ideation Phase - Team brainstorming with sticky notes and whiteboards',
    number: '01',
    title: 'Ideate',
    description: 'Comprehensive strategy sessions to align technical roadmaps with business vision.',
    expandedTitle: 'Ideate & Align',
    expandedDescription:
      'Deep discovery workshops define constraints, KPIs, and target architecture so every downstream decision maps to measurable business value.',
  },
  {
    id: 'design',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTDuQbzIedZE9atQdWOsyIrb3KfyOyqU2ZBJQY1QIam24e3TYWorwNgfW64kVVzqLF8_-76iwl-JzgS_Us0Hj9mAXKeZcvm5mAse_fouDUiJ41mTM_tiQUugAB7Dd-v6cghUt8cgw5vDqQJuxDHS9dSwugmLnhBDjd9D2vwHKHqXJlbykx4wQN8crkul9k--dFhnWSd--JysHZgFp3rEk8XwaS02XYmF1lqPVdOIIPSaE2lfkpOi-P1IN9IGinR819pdEUx49kza1H',
    imageAlt: 'High-contrast geometric pattern of concrete architectural structures with sharp shadows',
    expandedImageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-JHBFqmKmUMuff7pvBTNMvYjqaIjlOIIPceII16HJ7w80f_aiRfxluNCbeGXe8Xs4MoLbh6HOqGXGpXlkgwvDfKYwuYTUJhCBvD7yfdAZpE2mb_rvbypN-_XmPMLf4mcVSzQdYHdGjZ6KCDSEwNk1z4BwVtiJY2vwIjPkBQl145OsogwxbasTlXt-gC5TBj-j5hDsA-TqLt7BBid1Jdz9RZ1WaEDsjPj43OMQW7IHiQONx0QhCVZzKKu80ggdRIJjDKbj6X5xDWKE',
    expandedImageAlt: 'Design Phase - Designers collaborating on digital wireframes',
    number: '02',
    title: 'Design',
    description: 'Architecting robust frameworks and intuitive interfaces focused on scalability.',
    expandedTitle: 'Design & Simulate',
    expandedDescription:
      'Reference architectures, interface contracts, and failure scenarios are modeled early to reduce rework and accelerate delivery confidence.',
  },
  {
    id: 'develop',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3UB8v8VF398PFhgI0OOiaIU_qwTqdUJXJfSeb-BCTd8MsN0jWmyinXsVLecM5sBMBxlFrVy6k6Z1diVtIe0ddKzgYxn49xiIbmBd7mYzdfE157iE9GgoKR4ZMsy1CDBN-6M57gYrW_jaScfMjNOjviQ3x1FLpJ_QnmFQm4ZoP-fNR4tF2XJqOSz6yUGq68z9lPGrd11ooO6ilXV8p3AaUYLO-CwS1OXgglwl_cSjJbjJHLsfgZWaUVZ1NWEUBrAE2EuxJM-Iu5yUj',
    imageAlt: 'Abstract technical grid-like architectural structure with high contrast lighting',
    expandedImageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPySkFogv5Wx9CfSTiicIjEFfjZ30TQxfn-cDlHsOdBZWV_pq_kqp-oKItDJ_T26OVfXj9pAeTGUbTxMwlZFNbQM0ipB7IUoC6U9EHSpbys3GjWLLVsT7jlxf9Oet_tVxk312xfMIAkmQr1x7wtteslnsSbDzaFltW73H-s6GBavfkljuwKw-UjZ6ym7M7V6DqOPDmywCAPRCOIoe9JCCfORJmFzOKpKww5E5FUupmGgmrRGRSpQWj3wW74m_ZhYxpSJ_Sxc76yAzN',
    expandedImageAlt: 'Develop Phase - Developers engrossed in coding on large screens',
    number: '03',
    title: 'Develop',
    description: 'Clean-code implementation using cutting-edge tech stacks and agile principles.',
    expandedTitle: 'Develop & Iterate',
    expandedDescription:
      'Cross-functional squads deliver in short cycles with architecture guardrails, automated quality gates, and rapid stakeholder feedback.',
  },
  {
    id: 'deploy',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgHEciCTwPXiyjCHdr1EZaysc1GSvExdOmd-m3Hq1K0QPIKlrDb4uydW9twQh-89QaR_6CcZcExAX5ZfTef1DEzPexUtsJC7VSAd-CTzPvnnuVw__YfCmjjjkZcYSqB0L3DdcAkZhVg0P-0AiTmGMp8VEDxnWJaLD83SeaJVLSNJUNntm0Iqwc3KHjaJne-kaUL2_It4QeaJiZCxuC7BvdcV_Edb_Y4Cr8z0T6eWSlQJVwF_bSUBWKjsxL0AYb6XqP6vhAzk-Mbrv1',
    imageAlt: 'Modern architectural lines of an office atrium with dramatic high-contrast perspectives',
    expandedImageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlG9SY_v0S8mvTKJ9AL-lnImh-pYISDYoBMOz1uFF1VWQNr5qOoEWEa5JFRc_Fl3Vj1xnfGV4W0axlPW2KFyTx5r7Iacuz1DbHh7geE7OTmv4ELSl_2lnxCGOzoAFxVaEI13hh460iVTLq3ldnU02HusPW8O-mMeO-IsBkxNEE3ZRe2RT8vsrv6jQU-F5r4a9K9f8ZUnf6fQ594LpHrMFG4yuD0BwfVAyupO1I81QngNM6hThxdTIVDdM4Vy96yy6gPu02f0oz6ZFp',
    expandedImageAlt: 'Deploy Phase - Project team successfully monitoring a live system',
    number: '04',
    title: 'Deploy',
    description: 'Seamless integration and continuous monitoring for peak operational performance.',
    expandedTitle: 'Deploy & Optimize',
    expandedDescription:
      'Production rollouts, observability dashboards, and iterative optimizations keep systems resilient while continuously improving throughput.',
  },
];

const expertiseCards: ExpertiseCard[] = [
  {
    id: 'back-end-logic',
    icon: 'database',
    title: 'Back-End Logic',
    description: 'High-performance server-side architectures designed for enterprise scale and absolute reliability.',
    tags: ['Core Engine', 'Microservices'],
    technologies: [
      {
        alt: '.NET',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLcGEKaOr1LHsLt2itvFDkbnRNS07x6aiePYD5kIVvNatERBaopUKXUblYRHqMmcCbsxd3s8Gm1m79nf8MpFP7TiFUDGTZs2wrX7NWnBFcg-2dPXMOiiW0FXzwZddo6PU2abEjodq1tyFPpgECtOjf7HKV3wcsRpaelghQkSdUu5V5vuVaCoZRvvIHc7M_YFVrEVajO76S_ouU88gshM-c7zSLZfSCnOA2jAryz7g-T9NrR5MnfDD3Pe1LCSDPAn9G0sASkGSh9lnD',
        bgClassName: 'bg-blue-50 border-blue-100/50',
      },
      {
        alt: 'Java',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD9BR-GnRzr1Y8dg4i7pbjJP21hTnn1KUQrbGlIpU2AT7X78V2Xquprvfj_Iu68UjkvKy9Bh7VRF9uD5XsfqGWNJlsMgCwAAf-XEPlRENBewrW0OT6rnF3_U0E5DudE7ZWrFCF1CXA1w_1BdFbNzgPd65Od-JNASZJf8UiYv-OYK4QlE5zArZvrte28p91jW-M28m-gJArUdqAVhhe4ZfyhNafPOouE6Qca8JXBOf2eekLYwNkIoKmX28psjGe_rT-3QL0GkrWOIGG',
        bgClassName: 'bg-orange-50 border-orange-100/50',
      },
      {
        alt: 'PostgreSQL',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHSQbXd7evH5Mfn73YH8-S43cfylbKHzu1242l1ICb82oDjzc1VMB1xkWnu5cYyyEEE0U0zYPG4-cIdLmT5f9vJl9JCKrZq7cu5epH-8OWx1hHG7KIcCPV7XW9JAlwQgc42G2ghstFZLoUxXxrnFNoh6NbkdDyohCcVXXjv9z5eLcyFmkNixIEoiozZKWpoSU4PukzSKURRwolMztd74HH0-Mcd5ddvt0UZPumsN9QwG4x6lcK9C1pT-1oyMm_X1ThrzHOHKYhzfFK',
        bgClassName: 'bg-slate-50 border-slate-100/50',
      },
    ],
  },
  {
    id: 'front-end-precision',
    icon: 'web_asset',
    title: 'Front-End Precision',
    description: 'Responsive, accessible interfaces that combine smooth interactivity with complex data visualization.',
    tags: ['SPA', 'Architecture'],
    technologies: [
      {
        alt: 'React',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeIqdy5CdzqeSgdXd6RFKCNo9kNw7lmDLGZqno3LaaUTv69t6J7UOdEs0x5I4yjzxhi98d6jBF0ry0OCBJhmP5Yt9AS3Ec-JiK0IhDKGW9TSbk-XL8xayaPuTFqT3hzZhNOftfPkOZ3fUvwtagxuk492-AjZAmEtHJjTw9A6wHutSyJnPxxCrT6h5zUjFxvr9pFGl7wTO-icmi2iTb7o2imhei_Nm7H-G7yvJtCpjqyZwc8iGzyYoqKLluaflcm-3LFkREHx7b5yfI',
        bgClassName: 'bg-cyan-50 border-cyan-100/50',
      },
      {
        alt: 'Angular',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE9CTDnhoXJfwBRfrk0MgWJPwcFaJm237_0bXvLigIXlHfnuG8_htySd4kLTiASVmOyrpZIuaJBW80oFWnAl0QHNkT1_ZqeoIH3GFjFwXapgMxNVqI3VQdvBvay26bSLMowaCJvJ7XKLdBlTW7WjfuojQre0I7II9IcuCB77s2Ramr7zF-l7F7Br4z7BKKJHZCvN_L7QHLgKuXFtfJF8-UTkgxpbD2jQ_xFIoqQwQ_CzZ4zUbLFz-99IGBRdighVRUzAPv-u5wOq9H',
        bgClassName: 'bg-red-50 border-red-100/50',
      },
      {
        alt: 'Vue.js',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkw9pwrS0n1Nt_MJpz9i7vlbjAQoE9GAku8sAJYEoWon1Vr-ImjbPEcDK9VRWqxcb61jy9wkI5lCLFNHvRfUVmN_0ozYV0RLAzsPUOdTi2Hwj8p-BqzMslWXMqH6zFi3Ut5Udl9jDdyJNu9EDVuD8h4E6rFPEK12xJRK5aR-BIuFh_F6OFgWIhzpj8LHi8h71jwYfxfocapg5w8CGmF3tqaTVN3me74kxHtU_QS2OeJoWy1Dlblvamj_huXiAQ5BmDIN62WrbnYeoJ',
        bgClassName: 'bg-emerald-50 border-emerald-100/50',
      },
    ],
  },
  {
    id: 'data-intelligence',
    icon: 'insights',
    title: 'Data Intelligence',
    description: 'Unlocking business value through advanced analytics, machine learning, and robust data pipelines.',
    tags: ['AI / ML', 'Big Data'],
    technologies: [
      {
        alt: 'Python',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa-t-3pcnOt4fwPR3epfuLGAR0i_8m6L06Cc-zSLWCA3zpyGKP7ZvZXxusMhDi6sTGrWMVLHgeismN1Psur9kfS3DDW7VvhVi2Kmdv3Wif1rkWXXy3WLh_23dea0T23NHxTkDOYDVvpJi8ri84fpLoFyycw1dYyEIIHESc4_Owf2wdQIzCRdM8c_iew5PT0IOOwrSKXn57fUL8-JQstk85tc8PRrP8FPKgS7YzhqVNNauAU0dQfAFyj1uYCiAY_AQ451Ae1FFfI9w2',
        bgClassName: 'bg-blue-50 border-blue-100/50',
      },
      {
        alt: 'TensorFlow',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA2iSPf9S2m7Opan-1CAuflgn97aco3mv8aSFi-hIZ6--IuT4fkXI82uDB8trmi7kHuisT4asUUWhkjUNWUb0sGV81atc1ePe7qTyae6okBaEl6Xr3T7iKmpwCNoiVmgAf4P8FtNCr6lFs965oObS-EenV4EOPnUqyGncMvZFD0EymtrhwO1lsdd8eUEJNrVW1qo5aC98z_nNx-Rzu5aDkxk_93u1PnXyCEWDmI6UgHgYA3JFyICWDr7BxOK9jrfDQGybef0VUkJpl',
        bgClassName: 'bg-orange-50 border-orange-100/50',
      },
      {
        alt: 'Snowflake',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBtvcXGkTD6xrlpqkbA7LXvmsFhw2h0rucE--DiWwAZXE8d_7z92e1-kpnuRQPeSFUR49hKH84x9cYWN5GphUjq_2WP-kDx3-YB4rBpLwuoWFENmQeQBPE5rFlgCvP877P_bWg6RNwouK__tBJ1kALQhJiPPRTvXwqsM5R_SkdY-5p7Yj2FYyS0VRzQtzskMb-nEqa5KeRLno98okLW2LdcRrpnKia73k0k4ac5IBBWWsmi4NxaeBdxM-sS5gIYsxrN0S5vRV2W3QB',
        bgClassName: 'bg-cyan-50 border-cyan-100/50',
      },
    ],
  },
  {
    id: 'ux-ui-strategy',
    icon: 'palette',
    title: 'UX/UI Strategy',
    description: 'Strategic design systems that balance aesthetic brilliance with functional excellence and usability.',
    tags: ['Design Ops', 'Strategy'],
    technologies: [
      {
        alt: 'Figma',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_H1pZopjG1DWyxiHXs3uaB_03CH1RfOFgEE1bONBqBnTL2UHjugX5utLTZDbd9MxKzkfdH0sx8VUiQjcPxhiRGzsPi7UDyGLNmLSK6L5fLbbABtoKc8RpDI6hbvYGQYhLXD7rqhlHkf5JKb1mgGu6aH09c-doYVsilfFWLCWdNea4Y41FCD3XbxCJNCIDV_tZSWUoVKgh2__lKRyendmL-PnTEauHTqceJ-dKB-GhflIISDZuit8zMDZ3sQrybgLc8V9d30wiq8GO',
        bgClassName: 'bg-purple-50 border-purple-100/50',
      },
      {
        alt: 'Adobe XD',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXyRTKC-_hmcahpW-8UCR0qhoq_o2Xoj8TyZsB7qwwm4trcG2mqfq4tP-HPw6AFqksxUBvAkG8i6d4hwHGazAecbs9nXtuC8HmhdxoGdLH_aa-yH6lsf8cR41nYpa2sgswv-MTnaI3CpGhCGe8oLWY10_L_sq1hV-9bwTXz2GssKKRdNximMHDMUTcZyRqpqv3ZcoQCi9yOaDWLFzMGF84FvpItI74r5NSmuQu_RBm4xVMUkrOPaQAGqIwZZO8iN_S58p08FnrKTpu',
        bgClassName: 'bg-pink-50 border-pink-100/50',
      },
      {
        alt: 'Sketch',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLV-QNu-y92_9xqFrq_IqLoXAzPQxSgBc05wk0-FJjV9l9Amu0i9tihZ56nhiF6bN79F118lHXUZ5oTsxAkDEiuLLJY72IrDDYjac0kl078A417akADIWwQ6hN7U7fcAsFUKkP-TP5vVlk5lQj5w6V73xHNEEs7H5nMIGIUSSuxoRq3mNbbFBSJvYNiDNjzewzWnJF8BDdRn54g72nTX1JP1Y6Co0nuvkm6VS3fWPjTy9gSwl5UcPNn8iLlsR6wNCHWXgIoGkFqW34',
        bgClassName: 'bg-amber-50 border-amber-100/50',
      },
    ],
  },
  {
    id: 'quality-assurance',
    icon: 'rule',
    title: 'Quality Assurance',
    description: 'Comprehensive testing strategies ensuring zero-defect deployments through deep automation.',
    tags: ['Automation', 'CI/CD'],
    technologies: [
      {
        alt: 'Selenium',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt1wPYJLssTZr0vApC6d_rAKdek-fkOI1yUIiog3VVRRb2BFbMzTNV-5AMTt3zjooU_46FRH1PV2oRVcBivqSNiQNI7oCukny6Jv5cOTANntVTOBsKHCtvj2BEZan0Oot1XJ2BkQCV_bZ170w9Rer3ySF7I0SnHXJ21nVOG72mb25IGiMoqhHBrhu8T5wDRfEt-D8g-N2R7bTHqk9nN6dMWtEiMtF6rA_BWMyAj5TquroOZm75bdej0WDdpfpHo6QU_NInlzUwTG92',
        bgClassName: 'bg-emerald-50 border-emerald-100/50',
      },
      {
        alt: 'Cypress',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJMlaI82L6b0bIVWOJQuMJmgbc8THn1weND_8ax79Wm2r644gWMxUOpxi2VozlzXu8rlri4zUWm7edhAbsoWGYp8hYWUjM2VTC9RKsNL0XF0iWQzohHU0CtcTL4STuvg0JfjwLmoFyUrOIT4yHGk574XA9RV15j8DXsFyMP5iYERNXyAYwdLbhVYhL20N4RX9LPnvz7DqgrsPLh719XYuCI2ERnRQxnmO4InhxzG7WZjWiigndqyP2tFnuo0ZZbmF_03OCluJYyTNU',
        bgClassName: 'bg-slate-50 border-slate-100/50',
      },
      {
        alt: 'JUnit',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN_2Lvkl5INFMDyiPbTgFdg5NEX3Gq71CNmDW-oHKsd8MHOlC7Yzeo7fFdZQl0prEhUEmSjLSWP6sS23gaPi_bVttW_AE02e2prDaVSo1dNiMlOmRvbJ8SJyfVzQ2ghghKcOIkUzokTCGrptoEQ6O1OEMP_dApZr1PLep4z1dGsKYsJb4n9bhcZeXL83OF-QRYE1fcHgxd4TxaJc3Bvj5QZKFBbgL64bO9YbBryZnK51fR8VTHrZ38BF-EfvUF25udCb6LOqC9QMWf',
        bgClassName: 'bg-red-50 border-red-100/50',
      },
    ],
  },
  {
    id: 'cybersecurity',
    icon: 'shield_lock',
    title: 'Cybersecurity',
    description: 'End-to-end security architecture protecting enterprise assets across cloud and local ecosystems.',
    tags: ['Identity', 'Compliance'],
    technologies: [
      {
        alt: 'Azure Security',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM9zby1bOCb5dA6OIgu09NjyKuvxJONq63d4-v3ubnXq-hHmKnRTJ-2YNUJOuXGJbPSn5AfzTj2Oj4XyMC6G6VF5X_AWzaBX2ImdFDqBCawk90I3Wb3ZNluH8E0r-Ge1byrMqVdLqr8TIdI-17-aFyf1FMDxnTXqIWExlAClORLOX1iBcaG82r_dY-LwFfebS_wt-a1lUYgTzQ9AN9XPO2XlWDwJXwzCOACX68q3bqOJS-uETHOHqc9PK5WxwPRA1Kbfspo0nXzLXy',
        bgClassName: 'bg-blue-50 border-blue-100/50',
      },
      {
        alt: 'AWS Security',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYPTbtdRw15BjZs5qhrkwJmS-qowYczNIxbGSRqHUsuA-3mhUapMSDZ5kYf8wnZdJb8VnoUvTcrrgrAuKuhSh4sVqPQDCnfKL_G6FtJ8upiM9mmrarhEVkX_yCHwD1dFLDeM5wy8h3Wbsc2L1dRW1-rpfNZZWug-Ft3Hqo8IYFa7vLP7RbbR8nyLYC1PD3mBwiyT_lxkJGFRKK3ztkE0_5HTEVVLfDtmDJkQo1s4an87jeatdEqP09H0zKSsjLCtdjSusvy4bd2hJQ',
        bgClassName: 'bg-orange-50 border-orange-100/50',
      },
      {
        alt: 'Okta',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAsJJaISfwJK78LgkcNl8YDOxtDHPIiogYhlDL_I1SSTDFxXez0EQV2lmmcnl_TkIors7pHsXDWLwoRiXo8ItgB783bjZZUjfsNgO_azNLoRKFwOeRF1O0J3I77DcF8vngg97Yr0P-VwDUw_LvsC3GwtV2LG-DRmUytfn22DuFiA57lLtxCh_YRjv7IexJi0ZaenmgsFJ_lxLeUDK2RkqXKULOe45NVSMMDMGlIBF8Q2UA53OEK9s7pgmuraYh8WwalTLVZ4HVv7nQ',
        bgClassName: 'bg-blue-50 border-blue-100/50',
      },
    ],
  },
];

const marqueeRows: MarqueeRow[] = [
  {
    id: 'marquee-row-1',
    direction: 'right',
    speedSeconds: 34,
    images: [
      {
        alt: '.NET logo',
        icon: <DotNetLogo />,
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        alt: 'Node.js logo',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
        alt: 'Java logo',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        alt: 'React logo',
      },
    ],
  },
  {
    id: 'marquee-row-2',
    direction: 'left',
    speedSeconds: 38,
    images: [
      {
        alt: 'Angular logo',
        icon: <AngularLogo />,
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
        alt: 'Flutter logo',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        alt: 'AWS logo',
      },
      {
        alt: 'Azure logo',
        icon: <AzureLogo />,
      },
    ],
  },
  {
    id: 'marquee-row-3',
    direction: 'right',
    speedSeconds: 36,
    images: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        alt: 'Figma logo',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        alt: 'Node.js logo',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        alt: 'React logo',
      },
          {
            alt: 'Angular logo',
            icon: <AngularLogo />,
          },
    ],
  },
];

function AboutUsPage(): ReactElement {
  const [hoveredApproachIndex, setHoveredApproachIndex] = useState<number | null>(null);
  const approachAnimation = {
    layoutMs: 750,
    mediaMs: 850,
    contentMs: 700,
  };

  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only enable auto-hover-on-visible for touch devices / non-hover environments
    const prefersHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    if (prefersHover) return;

    if (!('IntersectionObserver' in window)) return;

    // Use multiple thresholds and a slight negative bottom rootMargin so minor layout/scroll differences
    // (or lazily-loaded images) don't prevent the "fully visible" detection in production.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute('data-approach-index');
          if (!idxAttr) return;
          const idx = Number(idxAttr);

          // Consider visible when mostly in view; pick the best threshold hit
          if (entry.intersectionRatio >= 0.9) {
            setHoveredApproachIndex(idx);
          } else {
            setHoveredApproachIndex((prev) => (prev === idx ? null : prev));
          }
        });
      },
      { threshold: [0.6, 0.9, 0.99], rootMargin: '0px 0px -10px 0px' }
    );

    // Query DOM elements to avoid timing issues with refs or wrapper components
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-approach-index]'));
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background text-black dark:bg-backgroundDark dark:text-white">
      <Header
        navItems={headerNavItems}
        ctaLabel="Get Consultation"
        ctaHref="/#contact"
        logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44"
      />

      <section className="relative flex h-[619px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional team collaborating in a modern architectural office space"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhymxOg9rVrUxLcqBMIUA7RNTO1uIsuV3nGaqvoq69V2F9PUqYelj1JT92_XR7c11YXk3jOji1IH95VwP1LATUGlSR0ZvWiM5TkvfhAHe2y2EPEyF4nExk-8PAIQYQUTfavMAC5ZQhFda94IkD9XkiZe6lcQd34k235udxe0uAMQzhQpo9468PuOa0GeaXSO7dgEytuITBjOY5BBVNa_DST-tmsmFAHMsKKlwNO1OfdRgU2lerx0vNmTW4EhKCWrhzNPad7-riXhex"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-brightness-50" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <FadeInOnScroll>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter text-white md:text-7xl">
              Architectural Precision in Engineering.
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delayMs={300}>
            <a
              href="/#contact"
              className="inline-flex rounded-xl bg-secondary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-black/20 transition-all hover:bg-[#006666] hover:scale-105 active:scale-95"
            >
              Talk to an Expert
            </a>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="w-full bg-background py-24 dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-12 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl bg-background p-12 border border-slate-100 dark:bg-backgroundDark dark:border-slate-700 shadow-sm">
              <div className="absolute right-0 top-0 p-8 opacity-60 transition-opacity group-hover:opacity-100">
                <span aria-hidden="true" className="material-symbols-outlined text-9xl text-primary dark:text-secondary">
                  handshake
                </span>
              </div>
              <FadeInOnScroll>
                  <p className="mb-6 block text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Our Mission</p>
                </FadeInOnScroll>

                <FadeInOnScroll delayMs={120}>
                  <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white">Building Partnerships That Last Generations</h2>
              </FadeInOnScroll>

              <FadeInOnScroll delayMs={240}>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  We don&apos;t just deliver software; we engineer trust. Our mission is to integrate seamlessly with your core objectives, creating lasting architectural solutions that grow alongside your business.
                </p>
              </FadeInOnScroll>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-backgroundOne p-12 border border-slate-200 dark:bg-backgroundDarkOne dark:border-slate-700 shadow-sm text-black dark:text-white">
              <div className="absolute right-0 top-0 p-8 opacity-60 transition-opacity group-hover:opacity-100">
                <span aria-hidden="true" className="material-symbols-outlined text-9xl text-primary dark:text-secondary">
                  rocket_launch
                </span>
              </div>
              <FadeInOnScroll>
                <p className="mb-6 block text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Our Vision</p>
              </FadeInOnScroll>

              <FadeInOnScroll delayMs={120}>
                <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white">Empowering Customers Through Pure Technology</h2>
              </FadeInOnScroll>

              <FadeInOnScroll delayMs={240}>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  To redefine the standard of engineering excellence, where technical barriers dissolve and our clients are empowered to lead their industries through superior digital infrastructure.
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne py-24 dark:bg-backgroundDark">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16">
            <SectionHeading
              label={"Methodology"}
              heading={"Our Strategic Approach"}
              center={false}
              headingClassName={"text-5xl font-black tracking-tight text-black dark:text-white"}
              delayMsHeading={120}
            />
            <div className="w-80 h-1.5 bg-secondary mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:flex md:gap-4">
            {approachSteps.map((step, i) => (
              <FadeInOnScroll
                key={step.id}
                delayMs={i * 80}
                className="transition-all duration-500 md:min-w-0"
                style={{
                  transitionDuration: `${approachAnimation.layoutMs}ms`,
                  flex:
                    hoveredApproachIndex === null
                      ? '1 1 0%'
                      : hoveredApproachIndex === i
                        ? '2.4 1 0%'
                        : '0.8 1 0%',
                }}
              >
                <article
                  ref={(el) => { cardRefs.current[i] = el; }}
                    data-approach-index={i}
                    className={`group flex h-full flex-col overflow-hidden rounded-xl border-b-4 border-transparent bg-surface-container-lowest dark:bg-backgroundDarkOne transition-all duration-500 hover:border-secondary ${
                      hoveredApproachIndex === i
                        ? 'md:scale-[1.01] md:shadow-2xl md:shadow-black/10'
                        : hoveredApproachIndex !== null
                          ? i < hoveredApproachIndex
                            ? 'md:-translate-x-2 md:scale-95 md:opacity-95'
                            : 'md:translate-x-2 md:scale-95 md:opacity-95'
                          : ''
                    }`}
                    style={{ transitionDuration: `${approachAnimation.layoutMs}ms` }}
                    onMouseEnter={() => setHoveredApproachIndex(i)}
                    onMouseLeave={() => setHoveredApproachIndex(null)}
                    onFocus={() => setHoveredApproachIndex(i)}
                    onBlur={() => setHoveredApproachIndex(null)}
                    tabIndex={0}
                  >
                  <div
                    className={`overflow-hidden transition-all duration-500 ${hoveredApproachIndex === i ? 'h-56' : 'h-48'}`}
                    style={{ transitionDuration: `${approachAnimation.mediaMs}ms` }}
                  >
                    <img
                      alt={hoveredApproachIndex === i ? step.expandedImageAlt : step.imageAlt}
                      className={`h-full w-full object-cover transition-all duration-500 ${hoveredApproachIndex === i ? 'scale-105' : 'scale-100'}`}
                      style={{ transitionDuration: `${approachAnimation.mediaMs}ms` }}
                      loading="lazy"
                      src={hoveredApproachIndex === i ? step.expandedImageSrc : step.imageSrc}
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4 text-5xl font-black text-black dark:text-white">{step.number}</div>
                    <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      {hoveredApproachIndex === i ? step.expandedTitle : step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed text-slate-600 dark:text-white transition-all duration-500 ${hoveredApproachIndex === i ? 'max-w-2xl' : 'line-clamp-3 md:line-clamp-4'}`}
                      style={{ transitionDuration: `${approachAnimation.contentMs}ms` }}
                    >
                      {hoveredApproachIndex === i ? step.expandedDescription : step.description}
                    </p>
                  </div>
                </article>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-32 bg-background dark:bg-backgroundDarkOne">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="md:w-3/5">
              <FadeInOnScroll>
                <p className="mb-4 block text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">The Core</p>
              </FadeInOnScroll>

              <FadeInOnScroll delayMs={120}>
                <h2 className="mb-8 text-5xl font-black tracking-tight text-primary dark:text-secondary">Executive &amp; Technical Orchestration</h2>
              </FadeInOnScroll>

              <FadeInOnScroll delayMs={240}>
                <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-slate-700 dark:text-background">
                    At Systems Edge, leadership isn&apos;t just about oversight; it&apos;s about setting the standard for technical precision. Our executive team brings decades of global engineering experience.
                    </p>
                    <p className="text-slate-700 dark:text-background">
                    Our tech leads are active contributors to the developer community, ensuring that our internal standards always reflect the frontier of modern software architecture.
                  </p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delayMs={360}>
                {/* Mobile-only image: shown above the numbers on small screens */}
                <div className="block md:hidden">
                  <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/20 aspect-[4/5] mb-6">
                    <img
                      alt="Strategic executive meeting happening in a glass-walled boardroom"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpjHRR-cjU9JBcr6EJxnTgI60sPKReqAVL_mXKkiGxx_NPHXyE8VZK9XdC75fxNQ-VzLqgxRGIxSM6usWndkBH2lDIaoZ9X6Q_MHnlHaQ-7nC1wPFrxCk1SOYU2u6MMnJx8Hy1squs9uTjh2TQ5fMsjT3bcHlZKQFWZJTSlcvseDwhsrUTZLFSg_aj3hkRNCmpyEdy8_f23rm0L6hOwLtpTCcZiqLUwAnyo-bbvvprhx8Jmf_8ucAHZx4G2ttLnqebzhGsfi631QA3"
                    />
                  </div>
                </div>
                <div className="mt-12 flex gap-12">
                  <div>
                      <div className="mb-1 text-4xl font-bold text-primary dark:text-secondary">
                        <CountUp to={15} durationMs={1600} className="inline-block" />+
                      </div>
                    <div className="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Engineers</div>
                    <div className="mt-2 h-1 w-8 bg-primary dark:bg-secondary" />
                  </div>
                  <div>
                    <div className="mb-1 text-4xl font-bold text-primary dark:text-secondary">
                      <CountUp to={3} durationMs={1600} className="inline-block" />+
                    </div>
                    <div className="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Global Offices</div>
                    <div className="mt-2 h-1 w-8 bg-primary dark:bg-secondary" />
                  </div>
                </div>
              </FadeInOnScroll>
            </div>

            <div className="relative md:w-2/5 hidden md:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/20 aspect-[4/5]">
                <img
                  alt="Strategic executive meeting happening in a glass-walled boardroom"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpjHRR-cjU9JBcr6EJxnTgI60sPKReqAVL_mXKkiGxx_NPHXyE8VZK9XdC75fxNQ-VzLqgxRGIxSM6usWndkBH2lDIaoZ9X6Q_MHnlHaQ-7nC1wPFrxCk1SOYU2u6MMnJx8Hy1squs9uTjh2TQ5fMsjT3bcHlZKQFWZJTSlcvseDwhsrUTZLFSg_aj3hkRNCmpyEdy8_f23rm0L6hOwLtpTCcZiqLUwAnyo-bbvvprhx8Jmf_8ucAHZx4G2ttLnqebzhGsfi631QA3"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-primary dark:bg-secondary p-8 text-white lg:block">
                <span aria-hidden="true" className="material-symbols-outlined mb-4 text-4xl">
                  military_tech
                </span>
                <p className="text-xl text-white font-bold leading-tight">
                  Architectural
                  <br />
                  Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundOne dark:bg-backgroundDark py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-20 text-center">
            <FadeInOnScroll>
              <h2 className="mb-4 text-5xl font-black text-black dark:text-white">Deep Domain Expertise</h2>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={120}>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">Specialized squads dedicated to mastering every layer of the digital ecosystem.</p>
            </FadeInOnScroll>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {expertiseCards.map((card, i) => (
                <ServicesDescriptionCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  delayMs={i * 90}
                  Icon={(props: SVGProps<SVGSVGElement>) => (
                    <span
                      aria-hidden="true"
                      className={`material-symbols-outlined text-4xl leading-none text-slate-700 dark:text-slate-300 ${props.className ?? ''}`}
                    >
                      {card.icon}
                    </span>
                  )}
                >
                  <div className="mb-6 flex items-start justify-end gap-2">
                    {card.technologies.map((technology) => (
                      <div key={technology.alt} className={`tech-badge ${technology.bgClassName} rounded-lg border p-1.5 shadow-sm`}>
                        <img alt={technology.alt} className="h-6 w-6 object-contain" loading="lazy" src={technology.src} />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </ServicesDescriptionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-backgroundDarkOne py-32 text-center">
        <div className="mx-auto max-w-4xl px-8">
          <SectionHeading
            heading={"A Symphony of Tech Expertise"}
            center={true}
            headingClassName={"text-3xl font-extrabold italic leading-tight tracking-tighter text-black dark:text-white lg:text-5xl"}
          />

          <div className="mx-auto mt-12 h-1 w-24 bg-secondary" />

          <div className="mt-14 text-left">
            <AnimatedImageMarquee rows={marqueeRows} />
          </div>
        </div>
      </section>
      
      <GlobalLocationsSections className="bg-backgroundOne dark:bg-backgroundDark"/>

      <section className="px-8 py-24 bg-background dark:bg-backgroundDarkOne">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary p-16 md:p-24">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <FadeInOnScroll>
              <h2 className="mb-10 text-4xl font-black leading-tight text-white md:text-6xl">Ready to build something extraordinary together?</h2>
            </FadeInOnScroll>

            <FadeInOnScroll delayMs={120}>
              <a
                href="/#contact"
                className="inline-flex rounded-xl bg-secondary px-12 py-5 text-xl font-bold text-white shadow-xl shadow-black/20 transition-colors hover:bg-secondary-fixed hover:text-slate-700 dark:hover:text-slate-300"
              >
                Start Your Project
              </a>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default AboutUsPage;