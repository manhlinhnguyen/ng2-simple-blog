import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Subscription, Observable} from 'rxjs/Rx';

import { Entry } from './entry';

@Injectable()
export class EntriesService {
	entriesChanged =  new EventEmitter<Entry[]>();
	
	private entries: Entry[] = [
	    new Entry('Test Entry 1', 
	    	'm dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo.',
	    	'<p>m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo.</p>',
	    	'',
	    	'2016-12-25T17:00:00.000Z', 
	    	'2016-12-25T17:01:26.392Z', 
	    	110, 
	    	true, 
	    	false, 
	    	'test-entry-1', 
	    	{
	      		'2016': true,
	      		'universe': true,
	      		'test 1': true,
	      		'vũ trụ': true
	    	}),
	    new Entry('Test Entry 2', 
	    	'![bluerose](https://4.bp.blogspot.com/-16TxH3YCYA8/VsqC0nBbXsI/AAAAAAAAGm8/8AyVbOioQmI/s1600/blue-rose_110658780times2tech.com.jpg) m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo.',
	    	'<p><img src="https://4.bp.blogspot.com/-16TxH3YCYA8/VsqC0nBbXsI/AAAAAAAAGm8/8AyVbOioQmI/s1600/blue-rose_110658780times2tech.com.jpg"/></p><p>m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo. m dolor sit amet, vis ea facete tincidunt. Vis conceptam sententiae et. Usu et ferri abhorreant consetetur. At est urbanitas intellegat, sea cu maiorum volutpat. Te tantas nonumy phaedrum duo.</p>',
	    	'https://4.bp.blogspot.com/-16TxH3YCYA8/VsqC0nBbXsI/AAAAAAAAGm8/8AyVbOioQmI/s1600/blue-rose_110658780times2tech.com.jpg',
	    	'2016-12-25T17:02:21.172Z', 
	    	'2016-12-25T17:02:36.778Z', 
	    	210, 
	    	true, 
	    	false,
	    	'test-entry-2', 
        	{
		      	'2017': true,
		      	'linh': true,
		      	'test 1': true,
		      	'học hành': true
	    	})
	  ];

	constructor(private http: Http) {}

	getEntries() {
    	return this.entries;
  	}

  	getEntriesByTag(tag: string){
  		var results: Entry[] = [];
  		for(var i = 0; i < this.entries.length; i++){
  			if(this.entries[i].tags.hasOwnProperty(tag)){
  				results.push(this.entries[i]);
  			}
  		}
  		return results;
  	}

	findEntryById(id: number) {
  		return this.entries[id];
	}

	findEntryBySlug(slug: string){
		let result = this.entries.filter(function( obj ) {
  			return obj.slug == slug;
		});
		if(result.length > 0)
			return result[0];
		else
			return null;
	}

	//create a tag array from entry.tags object
	entryTagsToArr(tags: Object): string[]
	{
		let tagArr: string[] = [];
		for(let i=0; i < Object.keys(tags).length; i++){
			tagArr.push(Object.keys(tags)[i]);
		}
		return tagArr;
	}

	//create entry.tags object from a tag array
	tagArrToEntryTags(tagArr: string[]): Object
	{
		let tags: Object = {};
		for(let i=0; i<tagArr.length; i++){
			tags[tagArr[i]] = true;
		}
		return tags;
	}

	deleteEntry(entry: Entry) {
  		this.entries.splice(this.entries.indexOf(entry), 1);
	}

	addEntry(entry: Entry) {
		this.entries.forEach(function(el){
			if(el.slug == entry.slug){
				let timestamp = Math.floor(new Date().getTime() / 1000);
				entry.slug = entry.slug + '-' + timestamp;
			}
		})
  		this.entries.push(entry);
	}

	updateEntry(oldEntry: Entry, updatedEntry: Entry) {
  		this.entries[this.entries.indexOf(oldEntry)] = updatedEntry;
	}

	storeData() {
  	const body = JSON.stringify(this.entries);
  	const headers = new Headers({
    		'Content-Type': 'application/json'
  	});
  	return this.http.put('https://linknote-4f958.firebaseio.com/entries.json', body, {headers: headers});
	}

	fetchData() {
  	return this.http.get('https://linknote-4f958.firebaseio.com/entries.json')
    		.map((response: Response) => response.json())
    		.subscribe(
      		(data: Entry[]) => {
        			this.entries = data;
        			this.entriesChanged.emit(this.entries);
      		}
    		);
	}

	checkEntryTags(entry: Entry){
		if (Object.keys(entry.tags).length > 0) { // Only on ES5-compliant browsers
		    return true;
		}
	}
}
