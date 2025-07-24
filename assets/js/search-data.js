// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "My research sorted by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "post-choosing-a-phone-for-privacy-in-2025",
        
          title: "Choosing a phone for privacy in 2025",
        
        description: "Evaluating modern mobile hardware for privacy, support, and long-term usability.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/privacy-phone/";
          
        },
      },{id: "news-i-gave-two-talks-at-the-bsa-conference-at-epfl-covering-different-aspects-of-scalability-and-storage-requirements-in-privacy-preserving-cryptocurrencies",
          title: 'I gave two talks at the BSA Conference at EPFL, covering different aspects...',
          description: "",
          section: "News",},{id: "news-we-presented-our-hackaton-project-persisting-private-bittorrent-trackers-with-tees-at-ic3-blockchain-camp-with-zhengwei-tong-aviv-yaish-hang-yin-and-andrew-miller",
          title: 'We presented our hackaton project Persisting Private BitTorrent Trackers with TEEs at IC3...',
          description: "",
          section: "News",},{id: "news-i-had-the-opportunity-to-share-and-get-feedback-on-our-research-at-monerokon-2025-in-prague",
          title: 'I had the opportunity to share and get feedback on our research at...',
          description: "",
          section: "News",},{id: "news-i-was-pleased-to-present-our-work-at-pets-2025-in-washington-d-c",
          title: 'I was pleased to present our work at PETS 2025 in Washington, D.C....',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp2.uni-trier.de/pid/365/0447.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%72%61%6E%63%6F%69%73-%78%61%76%69%65%72.%77%69%63%68%74@%75%6E%69%62%65.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wichtfx", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-6090-7901", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("//feed.xml", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://crypto.unibe.ch/fxw", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
