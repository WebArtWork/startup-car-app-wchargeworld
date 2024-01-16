import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileService } from './file.service';
import { HttpService } from 'wacom';

@Component({
	selector: 'ngx-file',
	templateUrl: './file.component.html',
	styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
	@Input() container = 'general';

	@Input() name = '';

	@Input() label = '';

	@Input() multiple = false;

	@Input() isPhoto = false;

	@Input() resize: number;

	@Input() value: string | string[] = this.multiple ? [] : '';

	@Output() update = new EventEmitter();

	get files(): string [] {
		return this.value as string[];
	}

	constructor(
		private _fs: FileService,
		private _http: HttpService
	) {}

	ngOnInit(): void {
		if (!this.multiple && this.value) {
			this.name = (this.value as string).split('/')[5].split('?')[0];
		}
	}

	set() {
		this._fs.setFile = (dataUrl: string) => {
			this._http.post('/api/file/photo', {
				container: this.container,
				name: this.name,
				dataUrl
			}, url => {
				if (this.multiple) {
					if (!this.value) {
						this.value = [];
					}

					(this.value as string[]).push(url);
				} else {
					this.name = url.split('/')[5].split('?')[0];

					this.value = url;
				}

				this.update.emit(this.value);
			});
		};
	}
}
