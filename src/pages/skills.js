import * as React from "react";
import Layout from "../components/layout";
import { 
    skillTitle, 
    skillDesc, 
    skillContainer 
} from "../components/layout.module.css";

const SkillsPage = () => {
    return (
        <Layout pageTitle="Skills">   
        <div>
            <h1>RUBY</h1>
            <h1>RUBY ON RAILS</h1>
            <h1>HTML / CSS</h1>
            <h1>SINATRA</h1>
            <h1>JAVASCRIPT</h1>
            <h1>REACT / REDUX</h1>
        </div>
        </Layout>
    )
}

export default SkillsPage