import React from 'react';
import { connect } from 'react-redux'
import { ConnectedTaskList } from './TaskList'

const Dashboard = ({groups})=> (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group=>(
        <ConnectedTaskList key={group.id} {...group}/>))}
    </div>
);

const mapStateToProps = ({groups})=>({groups});

export const ConnectedDashboard = connect(mapStateToProps) (Dashboard);