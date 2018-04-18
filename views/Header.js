'use strict';

import React from 'react';
const Image = require('../views/helper/utils').Image;

let imageProps = {
    class :"profile-image img-responsive pull-left",
    src: 'https://i.imgur.com/3O6yvJI.png',
    alt: "Karthik Gangadhar"
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        React.createElement("header",{ className: "header" },
            React.createElement("div", {  className: "container" },
                <Image class="profile-image img-responsive pull-left" src='https://i.imgur.com/3O6yvJI.png' alt = "Karthik Gangadhar" />,
                React.createElement("div", { className: "profile-content pull-left"},
                    React.createElement("h1", { className: "name"}, "Karthik Gangadhar"),
                    React.createElement("h2", { className: "desc"}, "Web App Developer"),
                    React.createElement("ul", { className: "social list-inline" },
                    //  ...products.map(product => React.createElement("li", {}, `${product.name} - ${product.price}`) ) );
                        React.createElement("li",null,
                            React.createElement("a", { href:"https://twitter.com/karthikg1643", },
                                React.createElement("i", { className: "fa fa-twitter" })  
                            )
                        ),
                        React.createElement("li",null,
                            React.createElement("a", { href:"https://stackoverflow.com/users/story/6414102", },
                                React.createElement("i", { className: "fa fa-stack-overflow"})  
                            )
                        ),
                        React.createElement("li",null,
                            React.createElement("a", { href:"https://www.linkedin.com/in/karthik-gangadhar-88aa6b85/", },
                                React.createElement("i", { className: "fa fa-linkedin"})  
                            )
                        ),
                        React.createElement("li",null,
                            React.createElement("a", { href:"https://github.com/karthikgangadhar/", },
                                React.createElement("i", { className: "fa fa-github-alt"})  
                            )
                        )
                    ),
                    React.createElement("a",{ className:"btn btn-cta-primary pull-right", href:"https://www.messenger.com/t/karthik gangadhar" },"Contact Me",
                        React.createElement("i", { className: "fa fa-paper-plane"},null)
                    )
                )
            )
        )
    );
  }
}

export default Header;

