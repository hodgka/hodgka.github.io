#include "board.h"
#include <vector>

Board::replace(char a, char b){
    //a=char to be replaced, b=char that will be replacing
    for(int i=0; i<getH();++i){
        for(int j=0; j<getW();++j){
            if(getBoard()[i][j]->getVal() == a){
                getBoard()[i][j]->setVal(b);
            }
        }
    }
}

Board::floodfill(int x, int y, char b){
    //b=replacing char
    
}
