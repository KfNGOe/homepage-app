import {Injectable} from "@angular/core";

@Injectable()
export class SidebarService {
  isVisible = {'right': false, 'left': false};

  entries: any = [];

  heading: any = [];
}
