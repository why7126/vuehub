const app = new Vue({
	el: "#app",
	data: {
		books : [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			}
		]
	},
	methods: {
		add(index){
			this.books[index].count++
		},
		minus(index){
			this.books[index].count--
		},
		remove(index){
			this.books.splice(index, 1)
		}
	},
	computed: {
		totalPrice(){
			let totalPrice = 0
			// 方式一
			// for (let i=0; i<this.books.length; i++){
			// 	totalPrice += this.books[i].count * this.books[i].price
			// }
			//方式二 for...in...
			// for (let i in this.books){
			// 	totalPrice += this.books[i].count * this.books[i].price
			// }
			//方式三 for...of...
			// for (let book of this.books){
			// 	totalPrice += book.count * book.price
			// }
			//方式四 reduce
			totalPrice = this.books.reduce(function(pre, book){
				return pre + book.count * book.price
			},0)
			return totalPrice
		},
		// filter/map/reduce
		// filter中的回调函数有一个要求：必须返加一个boolean值
		// true: 当返加true时，函数内部会自动将这次回调的n加入到新的数组中,
		// false: 当返回false时，函数内部会过滤掉这次的n,
		array_filter(){
			const arrays = [10, 20, 111, 222, 444, 40, 50]
			let newArrays = arrays.filter(function(n){
				return n < 100
			})
			return newArrays
		},
		//map函数使用
		array_map(){
			const arrays = [10, 20, 40, 50]
			let newArrays = arrays.map(function(n){
				return n * 2
			})
			return newArrays
		},
		//reduce函数使用
		//reduce作用对数组中所有的内容进行汇总
		array_reduce(){
			const arrays = [20, 40, 80, 100]
			let total = arrays.reduce(function(preValue, n){
				return preValue + n
			}, 0)
			return total
		},
		//filter/map/reduce组合使用
		array_more(){
			const arrays = [10, 20, 111, 222, 444, 40, 50]
			let total = arrays.filter(function(n){
				return n < 100
			}).map(function(n){
				return n * 2
			}).reduce(function(preValue, n){
				return preValue + n
			},0)
			return total
		},
		// 上述方法的简写
		array_more1(){
			const arrays = [10, 20, 111, 222, 444, 40, 50]
			let total = arrays.filter(n => n<100).map(n => n * 2).reduce((pre, n)=> pre + n)
			return total
		}
	},
	filters: {
		showPrice(price){
			return "¥" + price.toFixed(2)
		}
	}
})