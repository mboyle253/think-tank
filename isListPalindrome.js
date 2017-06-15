// https://codefights.com/interview/jQyCRiwF2BjBMYy7i/description

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {   
   if (l) {
      p = [l.value];
      while (l.next){
         l=l.next;
         p.push(l.value);
      }
      
      return p.length === 0 || p.join('') === p.reverse().join('');
   }
    
   return true;
}
