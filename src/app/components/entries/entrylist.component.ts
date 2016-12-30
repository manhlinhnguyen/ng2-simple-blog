import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Rx';

import { Entry } from './entry';
import { EntriesService } from './entries.service';
import { TagsService } from '../tags/tags.service';

@Component({
  selector: 'nb-entrylist',
  templateUrl: '../../views/entries/entrylist.component.html'
})
export class EntrylistComponent implements OnInit, OnDestroy {
	entries: Entry[] = [];
  foundEntry = false;
  private tag: string;
  private subscription: Subscription;
  constructor(private entriesService: EntriesService,
              private tagsService: TagsService,
              private router: Router,
              private route: ActivatedRoute) { }

	ngOnInit() {
    this.subscription = this.route.url.subscribe(
      (url: any) => {
        if(!url.length){
          this.entries = this.entriesService.getEntries();
        }
        else if(url[0].path == "tag"){
          if(this.tagsService.findTagBySlug(url[1].path) !== null) {
            this.tag = this.tagsService.findTagBySlug(url[1].path).name;
            this.entries = this.entriesService.getEntriesByTag(this.tag);
          }
        } 
        if(this.entries.length > 0){
          this.foundEntry = true;
        }
      }
    );
		
  	this.entriesService.entriesChanged.subscribe(
    		(entries: Entry[]) => this.entries = entries
  	);
	}

  onAddEntryClick(){
    this.router.navigate(['/entries/new']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
