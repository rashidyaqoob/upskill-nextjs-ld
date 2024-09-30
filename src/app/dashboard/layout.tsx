import React from 'react';

interface DashboardProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode
}

const DashboardLayout = ({ children, analytics, team }: DashboardProps) => {
  return (
    <>
      <div>Dashboard1</div>
      {children}
      {analytics}
      {team}
    </>
  );
}

export default DashboardLayout;
