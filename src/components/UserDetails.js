import React from 'react';
import './UserDetails.css';

const UserDetails = props => {
    const {
        name,
        avatar_url,
        bio,
        login,
        followers,
        public_repos,
    } = props.data

    return (
        <div>
            <User
                src={avatar_url}
                name={name}
                bio={bio}
                login={login}
                followers={followers}
                repos={public_repos}
            />
        </div>
    )
}

const User = props => {
    return (
        <div className="user">
            <img alt="avatar" src={props.src} />
            <div className="u-details">
                <h1>{props.name}</h1>
                <p>{props.login}</p>
                <h3>
                    <span>Followers <span className="span">{props.followers}</span></span>
                    <span style={{marginLeft: 25}}>Repositories<span className="span">{props.repos}</span></span>
                </h3>
                <p>{props.bio}</p>
            </div>
        </div>
    );
}

export default UserDetails;