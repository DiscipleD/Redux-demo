/**
 * Created by jack on 16-7-5.
 */

export default class AddTodoController {
	addTodoItem() {
		this.text && this.addTodoFn({text: this.text})
		this.text = ''
	}
}
