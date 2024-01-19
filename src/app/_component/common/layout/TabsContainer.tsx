"use client";

import { useEffect, useRef, useState } from "react";
import Tab from "@/app/_component/common/atom/Tab";
import TabButton from "@/app/_component/common/atom/TabButton";

interface Props {
  tabs: {
    name: string;
    content: JSX.Element;
  }[];
  tabButtonStyle?: {
    defaultClass?: string;
    selectedClass?: string;
  };
  sticky?: boolean;
  scroll?: boolean;
}

const TabsContainer = ({
  tabs,
  tabButtonStyle,
  sticky = false,
  scroll = false,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);
  const boxRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setScrollTop(rect.y);
    }
  }, []);

  const handleSelect = (tabName: string) => {
    setSelectedTab(tabName);
    if (scroll && window.scrollY > scrollTop) {
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  return (
    <article ref={boxRef}>
      <Tab
        buttons={tabs.map((tab) => (
          <TabButton
            isSelected={selectedTab === tab.name}
            key={tab.name}
            onClick={() => handleSelect(tab.name)}
            tabName={tab.name}
            defaultClass={tabButtonStyle?.defaultClass}
            selectedClass={tabButtonStyle?.selectedClass}
          />
        ))}
        sticky={sticky}
      >
        {tabs.find((tab) => tab.name === selectedTab)?.content}
      </Tab>
    </article>
  );
};

export default TabsContainer;
