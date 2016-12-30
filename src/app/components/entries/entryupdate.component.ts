import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MdDialog } from '@angular/material';
import { Subscription } from "rxjs/Rx";
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { Entry } from './entry';
import { EntriesService } from './entries.service';
import { TagsService } from '../tags/tags.service';
import { OthersService } from '../others.service';
import { EntryupdateDialogComponent } from './entryupdate-dialog.component';

var SimpleMDE : any = require('simplemde');
@Component({
  selector: 'nb-entryupdate',
  templateUrl: '../../views/entries/entryupdate.component.html'
})
export class EntryupdateComponent implements OnInit, OnDestroy, AfterViewInit {
	entryForm: FormGroup;
	private entrySlug: string;
	private entry: Entry;
	private isNew = true;
	private subscription: Subscription;
	private simplemde: any;
  selectedOptionDialog: any;
  tags: string[];

	@ViewChild('simplemde') textarea : ElementRef;

	constructor(private route: ActivatedRoute,
            	private entriesService: EntriesService,
              private othersService: OthersService,
              private tagsService: TagsService,
            	private formBuilder: FormBuilder,
            	private router: Router,
            	private elementRef: ElementRef,
              public dialog: MdDialog) { }

	ngOnInit() {
		this.subscription = this.route.params.subscribe(
    		(params: any) => {
      		if (params.hasOwnProperty('slug')) {
          		this.isNew = false;
          		this.entrySlug = params['slug'];
          		this.entry = this.entriesService.findEntryBySlug(this.entrySlug);
      		} else {
          		this.isNew = true;
              this.entry = new Entry('','','','','','',0, true, false,'',{});
      		}
          this.tags = this.entriesService.entryTagsToArr(this.entry.tags)
      		this.initForm();
    		}
  	);
	}

	onSubmit(e) {
    //Prevent Default Submit form
    e.preventDefault();
		let date = new Date();
		this.entryForm.value.contentMD = this.simplemde.value();
  	const newEntry = this.entryForm.value;
  	
  	newEntry.contentHTML = this.othersService.convertMDToHTML(newEntry.contentMD);
  	newEntry.imgPath = this.othersService.getFirstImg(newEntry.contentHTML);
  	newEntry.updatedAt = date.toISOString();
  	newEntry.tags = this.entriesService.tagArrToEntryTags(this.entryForm.value.tags);

  	if (this.isNew) {
  		newEntry.createdAt = date.toISOString();
      newEntry.slug = this.othersService.slugifyText(newEntry.title);
    	this.entriesService.addEntry(newEntry);
  	} else {
  		newEntry.createdAt = this.entry.createdAt;
  		newEntry.viewCount = this.entry.viewCount;
      newEntry.slug = this.entry.slug;
    	this.entriesService.updateEntry(this.entry, newEntry);
 		}
    this.tagsService.updateFreq(this.entriesService.entryTagsToArr(this.entry.tags), this.entriesService.entryTagsToArr(newEntry.tags));
    
  	this.router.navigate(['/entries/view', newEntry.slug]);
	}

	onCancel() {
  	if (this.isNew) {
      this.router.navigate(['/entries']);
    } else {
      this.router.navigate(['/entries/view', this.entrySlug]);
    }
	}

  onDelete() {
    let dialogRef = this.dialog.open(EntryupdateDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.entriesService.deleteEntry(this.entry);
        this.router.navigate(['/entries']);
      }
    });
  }

	ngAfterViewInit(){
	  this.simplemde = new SimpleMDE({ element: this.elementRef.nativeElement.value , spellChecker: false});
  }

	ngOnDestroy() {
  	this.subscription.unsubscribe();
	}

	private initForm() {
    this.entryForm = this.formBuilder.group({
      	'title': [this.entry.title, Validators.required],
      	'contentMD': [this.entry.contentMD],
      	'isPublic': [this.entry.isPublic],
      	'isPinned': [this.entry.isPinned],
      	'tags': [this.tags]
    });
	}
}

