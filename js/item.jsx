import React from 'react';

class Image extends React.Component {
    render() {
        return(
            <img className="item-img" src={this.props.src} alt="item image"></img>
        );
    }
}

class Anchor_image extends React.Component {
    render() {
        return(
            <a href={this.props.href} className="anchor-image">
                <Image src={this.props.src}/>
            </a>
        );
    }
}

class Name_item extends React.Component {
    render() {
        return(
            <p className="name-item">{this.props.name}</p>
        );
    }
}

class Price_item extends React.Component {
    render() {
        return(
            <p className="price-item">{this.props.price}</p>
        );
    }
}

class Buy_Button extends React.Component {
    GotoItem() {
        //let href = this.props.href;
        alert("clicked!");
    }

    render() {
        return(
            <button onClick={this.GotoItem}>Buy</button>
        );
    }
}

class Item extends React.Component {
    render() {
        return(
            <div className="slider-item">
                <Anchor_image href={this.props.href} src={this.props.src}/>
                <Name_item name={this.props.name}/>
                <Price_item price={this.props.price}/>
                <Buy_Button href={this.props.href}/>
            </div>
        )
    }
}

export default Item;