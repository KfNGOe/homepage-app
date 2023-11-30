import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

import { DhppbaseTestModule } from '../../../test.module';
import { DhppMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { DhppMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
  describe('DhppMetricsMonitoringComponent', () => {
    let comp: DhppMetricsMonitoringComponent;
    let fixture: ComponentFixture<DhppMetricsMonitoringComponent>;
    let service: DhppMetricsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [DhppbaseTestModule],
        declarations: [DhppMetricsMonitoringComponent]
      })
        .overrideTemplate(DhppMetricsMonitoringComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(DhppMetricsMonitoringComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DhppMetricsService);
    });

    describe('refresh', () => {
      it('should call refresh on init', () => {
        // GIVEN
        const response = {
          timers: {
            service: 'test',
            unrelatedKey: 'test'
          },
          gauges: {
            'jcache.statistics': {
              value: 2
            },
            unrelatedKey: 'test'
          }
        };
        spyOn(service, 'getMetrics').and.returnValue(of(response));

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(service.getMetrics).toHaveBeenCalled();
      });
    });
  });
});
