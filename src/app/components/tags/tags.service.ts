import { Injectable, EventEmitter } from '@angular/core';
import { Tag } from './tag';
import { OthersService } from '../others.service';

@Injectable()
export class TagsService {
	tagsChanged =  new EventEmitter<Tag[]>();
	private tags: Tag[] = [
		new Tag('2016', '2016', 'Các bài viết trong năm 2016', 5),
		new Tag('hà nội', 'ha-noi', 'Các bài viết của tôi về Hà Nội', 6),
		new Tag('vũ trụ', 'vu-tru', 'Vũ trụ thật bí ẩn và kỳ diệu', 10),
		new Tag('angular2', 'angular2', 'My Ng2 experiences', 24),
		new Tag('test 1', 'test-1', 'Test 1', 30)
	];
  constructor(private othersService: OthersService) { }

  	getTags() {
		return this.tags;
	}

	getAndSortTags(){
		return this.tags.sort(this.compareTagFreq);
	}

	findTagBySlug(slug: string): Tag 
	{
		let result = this.tags.filter(function( obj ) {
  			return obj.slug == slug;
		});
		if(result.length > 0)
			return result[0];
		else
			return null;
	}

	findTagByTagName(tagName: string): Tag 
	{
		let result = this.tags.filter(function( obj ) {
  			return obj.name == tagName;
		});
		if(result.length > 0)
			return result[0];
		else
			return null;
	}

	findSlugByTagName(tagName: string): string
	{
		let tag = this.findTagByTagName(tagName);
		if(tag == null){
			return null;
		} else {
			return tag.slug;
		}
	}
	
	updateFreq(oldTagArr: string[], newTagArr: string[]){
		let tagsToAdd = newTagArr.filter(item => oldTagArr.indexOf(item) < 0);
		let tagsToRemove = oldTagArr.filter(item => newTagArr.indexOf(item) < 0)
		this.addTags(tagsToAdd); 
		this.removeTags(tagsToRemove);
		console.log
	}
	
	addTags(tagArrToAdd: string[]){
		for(let i=0; i < tagArrToAdd.length; i++){
			let countFoundTag = 0;
			let countFoundSlug = 0;
			let newSlug = this.othersService.slugifyText(tagArrToAdd[i]);
			this.tags.forEach(function(el){
				if(el.name === tagArrToAdd[i]){
					el.freq++;
					countFoundTag++;
				}
				if(el.slug === newSlug) {
					countFoundSlug++;
				}
			});
			//if this is a new tag the add it to database
			if(countFoundTag == 0) {
				if(countFoundSlug > 0) {
					let timestamp = Math.floor(new Date().getTime() / 1000);
					newSlug = newSlug + '-' + timestamp;
				}
				this.tags.push(new Tag(tagArrToAdd[i], newSlug,'',1));
			}
		}
	}

	removeTags(tagArrToRemove: string[]){
		for(let i=0; i < tagArrToRemove.length; i++){
			let tempTags = this.tags;
			this.tags.forEach(function(el){
				if(el.name === tagArrToRemove[i]){
					el.freq--;
					// if there is no tag then remove the tag out of database
					if(el.freq == 0){
						tempTags.splice(tempTags.indexOf(el),1);
					}
				}
			});
		}
	}

	compareTagFreq(tag1, tag2) {
      if (tag1.freq > tag2.freq)
        return -1;
      if (tag1.freq < tag2.freq)
        return 1;
      return 0;
    }

    

}
