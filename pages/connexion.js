import React from 'React'
import Head from 'next/head'
import SignIn from '../components/SignIn'


const Connexion = (props) => (
    <div>
        <div>
            <Head>
                <title>Connexion</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
        </div>
        <div className="connexion">
            <h1>Formulaire de connexion</h1>
            <SignIn />
        </div>
    </div>
    
)


export default Connexion
