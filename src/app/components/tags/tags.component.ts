import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tag } from './tag';
import { TagsService } from './tags.service';
@Component({
  selector: 'nb-tags',
  templateUrl: '../../views/tags/tags.component.html'
})
export class TagsComponent implements OnInit {
	tags: Tag[] = [];
  
	constructor(private tagsService: TagsService,
              private router: Router) { }

	ngOnInit() {
		this.tags = this.tagsService.getAndSortTags();
  	this.tagsService.tagsChanged.subscribe(
    	(tags: Tag[]) => this.tags = tags
  	);
	}

  onToEntryListClick() {
    this.router.navigate(['/entries']);
  }
}
