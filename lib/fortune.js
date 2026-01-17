const fortune = ["Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe","Knowing your own darkness is the best method for dealing with the darknesses of other people. - Carl Jung", "The fear of death is more to be feared, than death itself. - Publilius Syrus","Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.  - Nikola Tesla","There is only one thing that makes a dream impossible to achieve: the fear of failure. - Paulo Coelho"]


exports.getRandomFortune = () => {
    return fortune[Math.floor(Math.random() * fortune.length)]
}
