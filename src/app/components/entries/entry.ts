export class Entry {
	constructor(public title: string, 
				public contentMD: string, 
				public contentHTML: string,
				public imgPath: string,
				public createdAt: string, 
				public updatedAt: string,
				public viewCount: number,
				public isPublic: boolean,
				public isPinned: boolean,
				public slug: string,
				public tags: Object) {}
}
