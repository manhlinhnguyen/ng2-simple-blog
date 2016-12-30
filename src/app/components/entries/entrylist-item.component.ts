import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from './entry';
import { EntriesService } from './entries.service';
import { TagsService } from '../tags/tags.service';
import { OthersService } from '../others.service';
@Component({
  selector: 'nb-entrylist-item',
  templateUrl: '../../views/entries/entrylist-item.component.html'
})
export class EntrylistItemComponent implements OnInit {
	  @Input() entry: Entry;
  	strippedContentHTML: string;
  	hasImg: boolean = false;
  	hasTag: boolean = false;
    tags: string[];

  	constructor(private entriesService: EntriesService,
                private othersService: OthersService,
                private tagsService: TagsService,
                private router: Router) {}

  	ngOnInit() {
      this.tags = Object.keys(this.entry.tags);
  		this.strippedContentHTML = this.othersService.stripTagHTML(this.entry.contentHTML);
  		if(this.entry.imgPath !== ''){
  			this.hasImg = true;
  		}
  		this.hasTag = this.entriesService.checkEntryTags(this.entry);
  	}

    onCardClick(){
      this.router.navigate(['/entries/view', this.entry.slug]);
    }

    onTagClick(tag: string){
      let slug = this.tagsService.findSlugByTagName(tag);
      if (slug) {
        this.router.navigate(['/tag', slug]);
      } else {
        this.router.navigate(['/entries']);
      }
    }
}
