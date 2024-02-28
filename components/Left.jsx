import { Link } from "lucide-react";
import React from "react";

const Left = () => {
  const sidebarItems = [
    {
      title: "AI",
      link: "https://vercel.com/integrations#ai",
      items: [
        {
          title: "AI 1",
          subtitle: "A modern content platform",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "AI 2",
          subtitle: "A modern content platform 2",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "AI 3",
          subtitle: "A modern content platform 3",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "AI 4",
          subtitle: "A modern content platform 4",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "AI 5",
          subtitle: "A modern content platform 5",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "AI 6",
          subtitle: "A modern content platform 6",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
      ],
    },
    {
      title: "Analytics",
      link: "https://vercel.com/integrations#analytics",
      items: [
        {
          title: "Analytics 1",
          subtitle: "A modern content platform",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Analytics 2",
          subtitle: "A modern content platform 2",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Analytics 3",
          subtitle: "A modern content platform 3",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Analytics 4",
          subtitle: "A modern content platform 4",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Analytics 5",
          subtitle: "A modern content platform 5",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Analytics 6",
          subtitle: "A modern content platform 6",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
      ],
    },
    {
      title: "CMS",
      link: "https://vercel.com/integrations#cms",
      items: [
        {
          title: "CMS 1",
          subtitle: "A modern content platform",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "CMS 2",
          subtitle: "A modern content platform 2",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "CMS 3",
          subtitle: "A modern content platform 3",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "CMS 4",
          subtitle: "A modern content platform 4",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "CMS 5",
          subtitle: "A modern content platform 5",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "CMS 6",
          subtitle: "A modern content platform 6",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
      ],
    },
    {
      title: "Code Repository",
      link: "https://vercel.com/integrations#code-repository",
      items: [
        {
          title: "Code Repository 1",
          subtitle: "A modern content platform",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Code Repository 2",
          subtitle: "A modern content platform 2",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Code Repository 3",
          subtitle: "A modern content platform 3",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Code Repository 4",
          subtitle: "A modern content platform 4",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Code Repository 5",
          subtitle: "A modern content platform 5",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Code Repository 6",
          subtitle: "A modern content platform 6",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
      ],
    },
    {
      title: "Commerce",
      link: "https://vercel.com/integrations#commerce",
      items: [
        {
          title: "Commerce 1",
          subtitle: "A modern content platform",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Commerce 2",
          subtitle: "A modern content platform 2",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Commerce 3",
          subtitle: "A modern content platform 3",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Commerce 4",
          subtitle: "A modern content platform 4",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Commerce 5",
          subtitle: "A modern content platform 5",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
        {
          title: "Commerce 6",
          subtitle: "A modern content platform 6",
          imageUrl: "https://vercel.com/integrations/contentful",
        },
      ],
    },
    {
      title: "Databases",
      link: "https://vercel.com/integrations#databases",
    },
    {
      title: "DevTools",
      link: "https://vercel.com/integrations#dev-tools",
    },
    {
      title: "Logging",
      link: "https://vercel.com/integrations#logging",
    },
    {
      title: "Messaging",
      link: "https://vercel.com/integrations#messaging",
    },
  ];
  return (
    <div className="w-[20%] bg-black ">
      <input type="text" placeholder="Search" className=" p-3 m-4 rounded-lg" />
      <ul className="text-white "></ul>
      <div className="px-4 text-yellow-300">
        {sidebarItems.map((item, index) => (
          <div>
            <li className="p">
              <Link href={item.link}>{item.title}</Link>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;
