# Blackjack
Side project started by experimenting with creating cards out of purely css

LIVE PREVIEW --> https://react-blackjack.herokuapp.com/

## Screenshots

Main | Pre Bet
-------------|--------
![Main Image](/readme_images/main.png?raw=true"main.png") | ![Pre Bet Image](/readme_images/prebet.png?raw=true"prebet.png")

Bet | Deal
-------------|--------
![Bet Image](/readme_images/bet.png?raw=true"bet.png") | ![Deal Image](/readme_images/deal.png?raw=true"deal.png")

Hit | Message
-------------|--------
![Hit Image](/readme_images/hit.png?raw=true"hit.png") | ![Message Image](/readme_images/message.png?raw=true"message.png")

Win | Game Over
-------------|--------
![Win Image](/readme_images/win.png?raw=true"win.png") | ![Game Over Image](/readme_images/gameover.png?raw=true"gameover.png")

## User Story
* User can select an initial money for betting amount
* User can place desired amount to bet
* User can clear bet if mistake is maken
* User can hit or stay
* User can see results of round
* User can play multiple rounds

## Technologies used
- HTML (JSX)
- CSS (SASS, font-awesome, animations)
- JavaScript (native listeners for animation)
- NodeJS (Express server)
- React (Redux)
- Webpack (Babel, Dev Middleware with Hot Module Reloading)

## How to Play

1. Select initial betting amount.
2. Click on chips to place bet.  Press buttons to place or clear bet.
3. Choose to hit for another card or to stay with current cards
4. Review ending results and bet again
5. Enjoy practicing your blackjack skills

## Built With

* Sublime Text
* Gimp
* Webpack

## Deployed With

* Heroku (NodeJS)

## Walk throughs of code

Most interesting JavaScript code
(Card animation with React)
```
class Card extends Component {

  componentDidMount() {
    // Animate the card and pass in animation callback
    this.animation(this.animationCallback.bind(this));
  }

  animation(callback) {
    // Get dom node of card
    let animatedCard = ReactDOM.findDOMNode(this.refs.cardAnimation);
    // After animation finishes go to callback logic
    animatedCard.addEventListener('webkitAnimationEnd', callback) ;
  }

  animationCallback() {
    let dispatch = this.props.dispatch
    let playerCards = this.props.playerCards;
    let dealerCards = this.props.dealerCards;
    let results = this.props.results;
    // Animate card in toggle
    dispatch(actions.animateCardIn());
    // Deal out cards
    this.deal(playerCards,dealerCards);
    // Calculate sum with imported sum function
    let obj = {};
    if (this.props.type === 'player') obj.player = playerCards;
    else obj.dealer = dealerCards;
    // Dispatch results
    results = sum(obj);
    dispatch(actions.score(results));
    // Process player hit results
    this.playerHit(results);
    // Process dealer hit results
    this.dealerHit(results);
  }
  
  ...

}
```

## Author

* [Matthew Bajorek](https://www.linkedin.com/in/matthewbajorek)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* All those hours spent playing rock, paper, scissors in school or with friends