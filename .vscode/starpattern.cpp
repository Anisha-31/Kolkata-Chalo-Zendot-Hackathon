#include <iostream>
using namespace std;
// problem 1
// // int main(){
// //     int n=7;
// //     for (int row=1;row<=n;row++){
// //         for(int column=1;column<=row;column++){
// //             cout<<"*";
// //         }
// //         cout<<endl;
// //     }
// //     return 0;
// // }
// //problem 2
// #include <iostream>
// using namespace std;
// // int main(){
// //     int n=5;
// //     for(int row=1;row<=n;row++){
// //         for(int col=1;col<=n-row+1;col++){
// //             cout<<" * ";
// //         }
// //         cout<<endl;
// //     }
// //     return 0;
// // }
// //problem 3
// int main(){
//     int n=7;
//     for(int row=1;row<=n;row++){
//         if(row==1||row==n){
//             for(int col=1;col<=n-row+1;col++){
//                 cout<<"*";
//             }
//         }
//         else{
//             cout<<"*";
//             for(int col=1;col<=n-row-1;col++){
//                 cout<<" ";
//             }
//             cout<<"*";
//         }
//         cout<<endl;
//     }
//     return 0;
// }
// problem 4
// int main(){
//     int n=5 ;
//     for(int row=1;row<=n;row++){
//         for(int col=1;col<=n-row;col++){
//             cout<<" ";
//         }
//         for(int col=1;col<=row;col++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }
// problem 
// //int main()
// {
//     int n = 6;
//     for (int row = 1; row <= n; row++)
//     {
//         for (int col = 1; col<=row-1;col++)
//         {
//             cout<<" ";
//         }
//         for(int col=1;col<n-row+1;col++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }
//problem 6
int main(){
    int n=6;
    for(int row=1;row<=n;row++){
        for(int col=1;col<=n-row;col++){
            cout<<" ";
        }
        if(row==1||row==n){
            for(int col=1;col<=row;col++){
                cout<<"* ";
            }
        }
        else{
            cout<<"* ";
            for(int col=1;col<=row-2;col++){
                // if(col%2==0){
                //     cout<<" ";
                // }
                cout<<"  ";
            }
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}