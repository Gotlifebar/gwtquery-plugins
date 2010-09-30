package gwtquery.plugins.draggable.client.plugins;                                
                                                                                  
import com.google.gwt.dom.client.Element;
import com.google.gwt.query.client.GQuery;
import com.google.gwt.user.client.Event;

import gwtquery.plugins.draggable.client.DraggableHandler;
import gwtquery.plugins.draggable.client.DraggableOptions;

import java.util.Arrays;
import java.util.Comparator;
                                                                                  
/**                                                                               
 * This add-on manage the z-index for the helper while being dragged.         
 *                                                                                
 * @author Julien Dramaix (julien.dramaix@gmail.com)                              
 *                                                                                
 */                                                                               
public class StackPlugin implements DraggablePlugin {                            
                                                                                  

	private class ZIndexComparator implements Comparator<Element>{
		
		public int compare(Element element1, Element element2) {
			int zIndex1 = getZindex(element1);
			int zIndex2 = getZindex(element2);
			return (zIndex1 - zIndex2);
			
		}
	}
	
	private static int getZindex(Element element){
	  String zIndex = element.getStyle().getZIndex();
	  if (zIndex == null || zIndex.length() ==0){
	    return 0;
	  }
	  return new Integer(zIndex);
	}
	                                                    
                                                                                  
  public String getName() {                                                       
    return "stack";                                                              
  }                                                                               
                                                                                  
  public void onDrag(DraggableHandler info, Element draggableElement, Event e) { 
  }                                                                               
                                                                                  
  public void onStart(DraggableHandler info, Element draggableElement, Event e) {
		
		GQuery stackElements  = info.getOptions().getStack();
		Element[] sortedElementArray = stackElements.elements();
		Arrays.sort(sortedElementArray, new ZIndexComparator());
		
		if (sortedElementArray.length == 0){
			return;
		}
		
		int zIndexMin =  getZindex(sortedElementArray[0]);
		int i = 0;
		for (Element el : sortedElementArray){
			el.getStyle().setZIndex(zIndexMin+i);
			i++;
		}
		
		info.getHelper().get(0).getStyle().setZIndex(zIndexMin+sortedElementArray.length);
    
  }                                                                               
                                                                                  
  public void onStop(DraggableHandler info, Element draggableElement, Event e) { 
  }                                                                               
                                                                                  
  public boolean hasToBeExecuted(DraggableOptions options) {                      
    return options.getStack() != null && options.getStack().length() != 0;                                           
  }                                                                               
                                                                                  
}                                                                                 
                                                                                  