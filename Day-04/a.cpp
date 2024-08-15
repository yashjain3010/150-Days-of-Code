
//1st Method
vector<int> rotateArray(vector<int>arr){
    int n = arr.size()-1;
    int temp1 = arr[0];
    int temp2 = arr[1];

    for(int i = 0 ; i < n ; i++){
        arr[i] = arr[i+2];
    }

    arr[n-2] = temp1;
    arr[n-1] = temp2;

}

vector<int> rotateArray1(vector<int>arr,int k){
    int n = arr.size() - 1;
    int temp[k];
    int nums[n];

    for(int i = 0 ; i < k ; i++){
        temp[i] = arr[i];
    }

    for(int i = k ; i < n ; i++){
         nums[(i-k)] = arr[i];
    }

    for(int i = 0 ; i < k ; i++){
        nums
    }
}

//[40,50,70,90,10,30]


for(int i = 0 ; i < n ; i++){
    temp[i] = arr[(i+k)%n];
}