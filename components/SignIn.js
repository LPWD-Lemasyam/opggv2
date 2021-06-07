import React from 'React'
import LogButtons from './logButtons'

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Connexion
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Déconnexion
      </button>
    );
  }

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            sessionId:'',
            isLoggedIn: false,
          };
    }
   
    handleChange = (event) => {
        const input = event.target;
        const value = input.value;
        this.setState({ [input.name]: value });
        this.setState({ sessionId: Math.floor(Math.random() * 1500) });    
    };

    handleFormSubmit = () => {
        this.setState({ isLoggedIn: true}, function(){
            console.log(this.state)
        });
        const { pseudo, sessionId, isLoggedIn } = this.state;
        localStorage.setItem('pseudo', pseudo);
        localStorage.setItem('sessionId', sessionId )
        localStorage.setItem('logged', isLoggedIn);
        
    };

    disconnectUser = () => {
        localStorage.removeItem('pseudo')
        localStorage.removeItem('sessionId')
        localStorage.removeItem('logged')
        this.setState({ isLoggedIn: false}, function(){
            console.log(this.state)
        });
        
        
        // document.location.href="http://localhost:3000/"
    }

    render(props){
        let button
        if(this.state.isLoggedIn == true){
            
                button = <LogoutButton  onClick={this.disconnectUser}/>
                var message = 'Bienvenue !'
            
        } else {
            button = <LoginButton onClick={this.handleFormSubmit}/>
            var message = 'Au revoir !'
        }
        return (
            <div>
                <label for="pseudo">Pseudo <br/><input id="pseudo" name="pseudo" type="text" value={this.state.pseudo} onChange={this.handleChange}/></label><br/>
                <label for="pseudo">Mot de passe <br/><input id="mdp" name="mdp" type="password"/></label><br/>
                <div>{button}</div>
                <div>{message}</div>
            </div>
        )
    }
    
}