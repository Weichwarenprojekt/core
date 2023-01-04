import { testPublishPipeline } from './test-publish-pipeline';

describe('testPublishPipeline', () => {
  it('should work', () => {
    expect(testPublishPipeline()).toEqual('test-publish-pipeline');
  });
});
