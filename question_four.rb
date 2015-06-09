class Stack
	attr_accessor :container
	def initialize
		@container = []
	end
	def peek
		@container[-1] #looks at the last one
	end
	def pop
		@container.delete_at(-1) #gives you the last element of a node
	end
	def push(value)
		@container.push(value) #pushes at the end of the array
	end

	def is_empty?
		peek == nil
	end
end

def stack_reverse(str)
	stack = Stack.new()
	str.each_char do |character|
		stack.push(character)
	end
	reversed_string = ""
	until stack.is_empty?
		letter = stack.pop()
		reversed_string = reversed_string + letter
	end
	reversed_string
end
# linear space: O(n)

# most efficient solution
def reverse(str)
	left = 0
	right = str.length - 1
	while left < right
		temp = str[left]
		str[left] = str[right]
		str[right] = temp
		left +=1
		right -=1
	end
	return str
end
# constant space
p stack_reverse('iphone')
p reverse('iphone')