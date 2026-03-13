import React from 'react';

import Detail from '../pages/Detail';
import Search from '../pages/Search';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from '../pages/feed';

import { SidebarProvider } from '../context/sidebar-context';
const App = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <div className="flex w-full">
            <Sidebar />

            <main className="flex-1 w-full overflow-y-auto overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/watch" element={<Detail />} />

                <Route path="/results" element={<Search />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </SidebarProvider>
  );
};

export default App;
