import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import DropDownCell from "./components/dropDownCell/index";

const data = [
  { label: "All pages", id: "all" as const }, // Treat "All pages" as a special case with an "all" id
  { label: "Page 1", id: 1 },
  { label: "Page 2", id: 2 },
  { label: "Page 3", id: 3 },
  { label: "Page 4", id: 4 },
  { label: "Page 5", id: 5 },
  { label: "Page 6", id: 6 },
];

function App() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | "all" | null>(null);

  const toggleSelectAll = () => {
    if (selectedItems.length === data.length - 1) {
      setSelectedItems([]); // Deselect all
    } else {
      setSelectedItems(data.filter(item => item.id !== "all").map((item) => item.id as number)); // Select all except "all"
    }
  };

  const toggleSelectItem = (id: number | "all") => {
    if (id === "all") {
      toggleSelectAll();
    } else {
      if (selectedItems.includes(id)) {
        setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
      } else {
        setSelectedItems([...selectedItems, id]);
      }
    }
  };

  const isAllSelected = selectedItems.length === data.length - 1;

  interface DividerProps {
    className?: string;
  }

  const Divider: React.FC<DividerProps> = ({ className = "" }) => {
    return <div className={`divider ${className}`}></div>;
  };

  return (
    <div className="main-container">
      <div className="dropdown-container">
        {/* Fixed "All pages" at the top */}
        <div className="fixed-top">
          <DropDownCell
            label={data[0].label}
            isSelected={isAllSelected}
            isHovered={hoveredItem === data[0].id}
            onMouseEnter={() => setHoveredItem("all")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => toggleSelectItem("all")}
          />
          <Divider />
        </div>

        {/* Scrollable pages */}
        <div className="dropdown-scroll">
          {data.slice(1).map((item) => {
            const isSelected = selectedItems.includes(item.id as number);
            return (
              <React.Fragment key={item.id}>
                <DropDownCell
                  label={item.label}
                  isSelected={isSelected}
                  isHovered={hoveredItem === item.id}
                  onMouseEnter={() => setHoveredItem(item.id as number)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => toggleSelectItem(item.id as number)}
                />
              </React.Fragment>
            );
          })}
          
        </div>
        <Divider className="bottomStyle" />
        <Button className="" label="Done" onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
