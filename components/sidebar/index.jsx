import React from 'react';
import { Link } from 'react-router-dom';
import { collapseNavItems, navItems } from '../../utils/constants';
import { useSidebar } from '../../context/sidebar-context';

const Sidebar = () => {
  const { isCollapsed } = useSidebar();

  if (isCollapsed) {
    return (
      <aside className="w-20 h-[calc(100vh-56px)] sticky max-sm:hidden">
        <div>
          {collapseNavItems.map((item, key) => (
            <Link
              to="/"
              key={key}
              className="flex flex-col items-center justify-center py-4 px-2 hover:bg-grey transition rounded-2xl"
            >
              <span className="text-2x1 mb-2">{item.icon}</span>
              <span className="text-xs text-center">{item.name}</span>
            </Link>
          ))}
        </div>
      </aside>
    );
  } else
    return (
      <>
        <div className="w-20 max-sm:hidden"></div>

        <aside className="w-60 h-[calc(100vh-56px)] overflow-y-auto fixed top-14 z-20 bg-black">
          <div className="py-3">
            {navItems.map((category, key) => (
              <div key={key} className="border-b border-grey py-4 px-3">
                {category.title && (
                  <h2 className="font-semibold mb-2">{category.title}</h2>
                )}

                <div>
                  {category.items.map((item, key) => (
                    <Link
                      to={item.path}
                      key={key}
                      className="flex gap-4 items-center p-2 hover:bg-dark rounded-lg"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </>
    );
};

export default Sidebar;
