"use client";

import { useState } from "react";
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
}

const TabsContainer = ({ tabs, tabButtonStyle, sticky = false }: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);

  const handleSelect = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <article>
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
