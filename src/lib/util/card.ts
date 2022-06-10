export enum CardType {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    PASS = 10,
    REVERSE = 11,
    DRAW_TWO = 12,
    DRAW_FOUR = 13,
    CHOOSE_COLOR = 14,
}
export enum CardColor {
    YELLOW = 0,
    RED = 1,
    BLUE = 2,
    GREEN = 3,
}

export const getColor = (color: CardColor): string => {
    switch (color) {
        case CardColor.BLUE:
            return "#1371C0";
        case CardColor.RED:
            return "#E0311A"
        case CardColor.YELLOW:
            return "#FFD037"
        case CardColor.GREEN:
            return "#95D333"
    }
}

export type Card = {
    type: CardType,
    color: CardColor,
}