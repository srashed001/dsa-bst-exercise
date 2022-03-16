class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right 
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if(!node){
      this.root = new Node(val)
      return this
    }

    if(val < node.val){
      if(node.left) return this.insertRecursively(val, node.left)
      node.left = new Node(val)
      return this
    }

    if(node.right) return this.insertRecursively(val, node.left)
    node.right = new Node(val)
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root

    while(current){
      if(current.val === val) return current
      current = val < current.val ? current.left : current.right
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if(!node) return
    if(node.val === val) return node
    if (val < node.val ) return this.findRecursively(val, node.left, node)
    return this.findRecursively(val, node.right, node)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, arr = []) {
    if(!node) return arr 
    arr.push(node.val)
    if(node.left) this.dfsPreOrder(node.left, arr)
    if (node.right) this.dfsPreOrder(node.right, arr)

    return arr

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, arr = []) {
    if(!node) return arr 
    if(node.left) this.dfsInOrder(node.left, arr)
    arr.push(node.val)
    if (node.right) this.dfsInOrder(node.right, arr)

    return arr

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, arr = []) {
    if(!node) return arr 
    if(node.left) this.dfsPostOrder(node.left, arr)
    if (node.right) this.dfsPostOrder(node.right, arr)
    arr.push(node.val)

    return arr

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(queue = [], arr = []) {

    if (this.root) queue.push(this.root)

    while(queue.length){
      const current = queue.shift(); 
      arr.push(current.val)
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }

    return arr

  }

  // helper function for removing method or anything that requires access to parent node of sought value

  findwithParent(val, node=this.root, parent = null) {
    if(!node) return
    if(node.val === val) return [node, parent] 
    if (val < node.val ) return this.findwithParent(val, node.left, node)
    return this.findwithParent(val, node.right, node)
  }



  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    const [node, parentNode] =  this.findwithParent(val)
    if(node.right){
      let current = node.right 
      while(current.left){
        current = current.left
      }
      current.left = node.left
      if(!parentNode){
        this.root = node.right
      } else {
        node.val < parentNode.val ? parentNode.left = node.right : parentNode.right = node.right
      }
      
      return node
    }

      node.val < parentNode.val ? parentNode.left = node.left : parentNode.right = node.left
      return node
    }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
