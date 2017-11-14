import React from 'react'

const ProfileContainer = (props) => (
    <div className="row" style={{padding: '15px 0', backgroundColor: '#F0F8FF', textAlign: 'center'}}>
        <div className="col-xs-12">
            <img src={props.user.photoURL} alt="Foto do usuário" className="img-thumbnail"/>
        </div>
        <div className="col-xs-12">
            <p><b>{props.user.displayName}</b></p>
        </div>
        <div className="col-xs-12">
            <button className="btn btn-warning" onClick={() => props.auth.signOut()}>Sair do facebook</button>
        </div>
    </div>   
)

export default ProfileContainer