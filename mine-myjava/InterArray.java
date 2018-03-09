/**
 * @(#)InterArray.java
 *
 *
 * @author 
 * @version 1.00 2018/3/7
 */


public class InterArray {

    public InterArray() {
    }
    //产生n个0~max之间的整数
    public static int[] random(int n,int max){
    	int value[]=new int[n];
    	for(int i=0;i<value.length;i++){
    		value[i]=(int)(Math.random()*max);
    	}
    	return value;
    }
    //输出数组
    public static void print(int value[]){
    	for(int i=0;i<value.length;i++){
    		System.out.print(" "+value[i]);
    	}
    	System.out.println();
    }
    //数组内的值排序
    public static int[] selectsort(int value[]){
    	for(int i=0;i<value.length;i++){
    		int min=i;
    		for(int j=i;j<value.length;j++){
    			if(value[min]>value[j]){
    				min=j;
    			}
    		}
    		if(i!=min){
    			int temp=value[i];
    			value[i]=value[min];
    			value[min]=temp;
    		}
    	}
    	return value;
    }
    //两个数组归并排序
    public static int[] merge(int X[],int Y[]){
    	int Z[]=new int[X.length+Y.length];
    	int i=0,j=0,k=0;
    	while(i<X.length&&j<Y.length){
    		if(X[i]<Y[j]){
    			Z[k++]=X[i++];
    		}
    		else{
    			Z[k++]=Y[j++];  			
    		}
    	}
    	while(i<X.length){
    		Z[k++]=X[i++];
    	}
    	while(j<Y.length){
    		Z[k++]=Y[j++];
    	}
    	return Z;
    }
    public static void main (String[] args) {
    	int n1=4,n2=4,max=100;
    	int table1[]=random(n1,max);
    	System.out.println("table1:");
    	print(table1);
    	selectsort(table1);
    	System.out.println("sorted table1:");
    	print(table1);
    	int table2[]=random(n2,max);
    	System.out.println("table2:");
    	print(table2);
    	System.out.println("sorted table2:");
    	print(selectsort(table2));
    	System.out.println("merge:");
    	print(merge(table1,table2));
}
}