/*
Given a set s of distinct integers and a number k, find the size of the maximum subset of s, such that 
the sum of any two elements in it is not divisible by the given k.

Followed algorithm found here : https://cs.stackexchange.com/questions/57873/maximum-subset-pairwise-not-divisible-by-k

function maxNonDivisibleSubset(s, k) {

  var counts = [];
  for (var x=0;x< s.length;x++){
    counts.push(0);
  }

  for(var a=0; a < s.length; a++){
    counts[s[a]%k]++;
  }

  var cnt = 0;
  for (var i=1;i<=(k/2);i++) {
    if(i!=k-i)
      cnt+=Math.max(counts[i],counts[k-i]);
  }
  if (k%2==0 && counts[k/2]>0) {
      cnt++;
  }
  if (counts[0]>0) {
    cnt++;
  }

  return cnt;
}
