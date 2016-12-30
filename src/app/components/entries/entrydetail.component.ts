import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs/Rx';
//import { slideInDownAnimation } from '../../animations';
import { Entry } from './entry';
import { EntriesService } from './entries.service';
import { TagsService } from '../tags/tags.service';

@Component({
  selector: 'nb-entrydetail',
  templateUrl: '../../views/entries/entrydetail.component.html',
  //animations: [ slideInDownAnimation ]
})
export class EntrydetailComponent implements OnInit, OnDestroy {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  selectedEntry: Entry;
  hasTag: boolean = false;
  foundEntry = false;
  tags: string[];
  
  private entrySlug: string;
  private subscription: Subscription;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private entriesService: EntriesService,
              private tagsService: TagsService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.entrySlug = params['slug'];
        this.selectedEntry = this.entriesService.findEntryBySlug(this.entrySlug);
      }
    );
    if (this.selectedEntry !== null) {
      this.hasTag = this.entriesService.checkEntryTags(this.selectedEntry);
      this.tags = Object.keys(this.selectedEntry.tags);
      this.foundEntry = true;
    }
  }

  onUpdate() {
    this.router.navigate(['/entries', 'update', this.entrySlug]);
  }

  onTagClick(tag: string){
    let slug = this.tagsService.findSlugByTagName(tag);
    this.router.navigate(['/tag', slug]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
